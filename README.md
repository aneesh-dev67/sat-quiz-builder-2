# SAT Quiz Builder

A simple web-based tool for creating custom SAT practice quizzes from question banks stored in JSON format.

## Features

- 📄 **PDF Parser**: Extract SAT questions from PDFs and convert to JSON
- 📝 **Custom Quiz Builder**: Select specific question sets to create personalized quizzes
- ✅ **Interactive Testing**: Take quizzes with immediate feedback
- 📊 **Results & Explanations**: See which questions you got wrong with detailed explanations

## Project Structure

```
sat-quiz-builder/
├── README.md                 # This file
├── requirements.txt          # Python dependencies
├── parser/
│   └── pdf_parser.py        # PDF to JSON conversion script
├── question_banks/          # JSON files with question sets
│   └── sample_questions.json
├── web/
│   ├── index.html           # Main quiz interface
│   ├── style.css            # Styling
│   └── app.js               # Quiz logic
└── output/                  # Parsed questions go here
```

## Setup

### 1. Open in VS Code (Recommended)

For the best development experience, open the workspace file:
```bash
code sat-quiz-builder.code-workspace
```

VS Code will prompt you to install recommended extensions. This gives you:
- 🚀 One-click tasks for parsing PDFs
- 🐛 Python debugging support  
- 🎨 Auto-formatting on save
- ✨ Code snippets for JSON editing
- 🌐 Live preview with auto-reload

See **VS_CODE_GUIDE.md** for detailed setup instructions.

### 2. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 3. Parse PDF Questions

Place your SAT question PDFs in the project folder, then run:

```bash
python parser/pdf_parser.py your_questions.pdf
```

This will create a JSON file in the `output/` directory.

### 4. Move Questions to Question Bank

Copy the generated JSON file to `question_banks/`:

```bash
cp output/your_questions.json question_banks/
```

### 5. Run the Quiz Application

Open `web/index.html` in your browser. That's it!

## Question JSON Format

Questions are stored in this format:

```json
{
  "set_name": "Math Section 1",
  "questions": [
    {
      "id": 1,
      "question": "What is 2 + 2?",
      "choices": {
        "A": "3",
        "B": "4",
        "C": "5",
        "D": "6"
      },
      "correct_answer": "B",
      "explanation": "2 + 2 equals 4 by basic addition."
    }
  ]
}
```

## Usage

1. **Select Question Sets**: Choose which question banks you want to include in your quiz
2. **Take Quiz**: Answer all questions
3. **Submit**: Get instant feedback on your answers
4. **Review**: See explanations for questions you got wrong

## Tips for PDF Parsing

- Ensure PDFs have clear question numbering
- Answer choices should be labeled A, B, C, D
- Explanations should follow the answer
- One question per page works best

## Documentation

- **README.md** - This file (overview and setup)
- **QUICK_START.md** - Fast reference guide  
- **USAGE.md** - Comprehensive usage instructions
- **VS_CODE_GUIDE.md** - VS Code tips and workflows
- **PROJECT_STRUCTURE.md** - File organization reference

## Contributing

Feel free to fork and improve! Some ideas:
- Add timer functionality
- Save quiz history
- Support for different question formats
- Mobile-responsive design improvements

## License

MIT License - feel free to use and modify!
