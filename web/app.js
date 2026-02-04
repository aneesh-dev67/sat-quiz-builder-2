// SAT Quiz Builder - Main Application Logic

class QuizApp {
    constructor() {
        this.questionBanks = [];
        this.selectedSets = new Set();
        this.quizQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        
        this.init();
    }

    async init() {
        await this.loadQuestionBanks();
        this.setupEventListeners();
        this.renderQuestionSets();
    }

    async loadQuestionBanks() {
        // Define available question banks
        // In a real setup, you could fetch this list dynamically
        const questionBankFiles = [
            '../question_banks/sample_questions.json'
            // Add more question bank files here as you create them
        ];

        for (const file of questionBankFiles) {
            try {
                const response = await fetch(file);
                if (response.ok) {
                    const data = await response.json();
                    this.questionBanks.push(data);
                }
            } catch (error) {
                console.warn(`Could not load ${file}:`, error);
            }
        }

        if (this.questionBanks.length === 0) {
            document.getElementById('question-sets-list').innerHTML = 
                '<p style="color: #e53e3e; padding: 20px; text-align: center;">No question banks found. Please add JSON files to the question_banks/ directory.</p>';
        }
    }

    setupEventListeners() {
        // Setup screen
        document.getElementById('start-quiz-btn').addEventListener('click', () => this.startQuiz());
        
        // Quiz screen
        document.getElementById('prev-btn').addEventListener('click', () => this.navigateQuestion(-1));
        document.getElementById('next-btn').addEventListener('click', () => this.navigateQuestion(1));
        
        // Results screen
        document.getElementById('retry-btn').addEventListener('click', () => this.resetQuiz());
    }

    renderQuestionSets() {
        const container = document.getElementById('question-sets-list');
        container.innerHTML = '';

        this.questionBanks.forEach((bank, index) => {
            const setItem = document.createElement('div');
            setItem.className = 'question-set-item';
            
            setItem.innerHTML = `
                <input type="checkbox" id="set-${index}" data-set-index="${index}">
                <div class="question-set-info">
                    <div class="question-set-name">${bank.set_name}</div>
                    <div class="question-set-count">${bank.questions.length} questions</div>
                </div>
            `;

            const checkbox = setItem.querySelector('input[type="checkbox"]');
            checkbox.addEventListener('change', (e) => this.toggleQuestionSet(index, e.target.checked));
            
            setItem.addEventListener('click', (e) => {
                if (e.target.tagName !== 'INPUT') {
                    checkbox.checked = !checkbox.checked;
                    checkbox.dispatchEvent(new Event('change'));
                }
            });

            container.appendChild(setItem);
        });
    }

    toggleQuestionSet(index, isSelected) {
        if (isSelected) {
            this.selectedSets.add(index);
        } else {
            this.selectedSets.delete(index);
        }
        this.updateSelectedCount();
    }

    updateSelectedCount() {
        let totalQuestions = 0;
        this.selectedSets.forEach(index => {
            totalQuestions += this.questionBanks[index].questions.length;
        });

        document.getElementById('total-questions-count').textContent = 
            `${totalQuestions} question${totalQuestions !== 1 ? 's' : ''} selected`;
        
        document.getElementById('start-quiz-btn').disabled = totalQuestions === 0;
    }

    startQuiz() {
        // Collect all selected questions
        this.quizQuestions = [];
        this.selectedSets.forEach(index => {
            this.quizQuestions.push(...this.questionBanks[index].questions);
        });

        // Reset state
        this.currentQuestionIndex = 0;
        this.userAnswers = {};

        // Show quiz screen
        this.showScreen('quiz-screen');
        this.renderQuestion();
    }

    renderQuestion() {
        const question = this.quizQuestions[this.currentQuestionIndex];
        
        // Update progress
        const progress = ((this.currentQuestionIndex + 1) / this.quizQuestions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('question-counter').textContent = 
            `Question ${this.currentQuestionIndex + 1} of ${this.quizQuestions.length}`;

        // Update question text
        document.getElementById('question-text').textContent = question.question;

        // Render choices
        const choicesContainer = document.getElementById('choices-container');
        choicesContainer.innerHTML = '';

        Object.entries(question.choices).forEach(([letter, text]) => {
            const choice = document.createElement('div');
            choice.className = 'choice';
            if (this.userAnswers[question.id] === letter) {
                choice.classList.add('selected');
            }

            choice.innerHTML = `
                <div class="choice-letter">${letter}</div>
                <div class="choice-text">${text}</div>
            `;

            choice.addEventListener('click', () => this.selectAnswer(question.id, letter));
            choicesContainer.appendChild(choice);
        });

        // Update navigation buttons
        document.getElementById('prev-btn').disabled = this.currentQuestionIndex === 0;
        
        const nextBtn = document.getElementById('next-btn');
        if (this.currentQuestionIndex === this.quizQuestions.length - 1) {
            nextBtn.textContent = 'Submit Quiz';
        } else {
            nextBtn.textContent = 'Next';
        }
    }

    selectAnswer(questionId, answer) {
        this.userAnswers[questionId] = answer;
        this.renderQuestion();
    }

    navigateQuestion(direction) {
        // If on last question and going forward, submit quiz
        if (this.currentQuestionIndex === this.quizQuestions.length - 1 && direction === 1) {
            this.submitQuiz();
            return;
        }

        this.currentQuestionIndex += direction;
        this.currentQuestionIndex = Math.max(0, Math.min(this.currentQuestionIndex, this.quizQuestions.length - 1));
        this.renderQuestion();
    }

    submitQuiz() {
        // Calculate results
        let correctCount = 0;
        const results = [];

        this.quizQuestions.forEach(question => {
            const userAnswer = this.userAnswers[question.id];
            const isCorrect = userAnswer === question.correct_answer;
            
            if (isCorrect) {
                correctCount++;
            }

            results.push({
                question: question.question,
                userAnswer: userAnswer || 'No answer',
                correctAnswer: question.correct_answer,
                isCorrect: isCorrect,
                explanation: question.explanation,
                choices: question.choices
            });
        });

        this.showResults(correctCount, results);
    }

    showResults(correctCount, results) {
        const totalCount = this.quizQuestions.length;
        const percentage = Math.round((correctCount / totalCount) * 100);

        // Update score display
        document.getElementById('score-percentage').textContent = `${percentage}%`;
        document.getElementById('correct-count').textContent = correctCount;
        document.getElementById('total-count').textContent = totalCount;

        // Render detailed results
        const detailsContainer = document.getElementById('results-details');
        detailsContainer.innerHTML = '<h3 style="margin-bottom: 20px; color: #2d3748;">Review Your Answers</h3>';

        results.forEach((result, index) => {
            const resultItem = document.createElement('div');
            resultItem.className = `result-item ${result.isCorrect ? 'correct' : 'incorrect'}`;

            const userAnswerText = result.userAnswer === 'No answer' 
                ? 'No answer' 
                : `${result.userAnswer}) ${result.choices[result.userAnswer]}`;
            
            const correctAnswerText = `${result.correctAnswer}) ${result.choices[result.correctAnswer]}`;

            resultItem.innerHTML = `
                <div class="result-question">
                    ${index + 1}. ${result.question}
                </div>
                <div class="result-answer">
                    <strong>Your answer:</strong> ${userAnswerText}
                </div>
                <div class="result-answer">
                    <strong>Correct answer:</strong> ${correctAnswerText}
                </div>
                ${!result.isCorrect && result.explanation ? `
                    <div class="result-explanation">
                        <strong>Explanation:</strong> ${result.explanation}
                    </div>
                ` : ''}
            `;

            detailsContainer.appendChild(resultItem);
        });

        this.showScreen('results-screen');
    }

    resetQuiz() {
        this.showScreen('setup-screen');
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
