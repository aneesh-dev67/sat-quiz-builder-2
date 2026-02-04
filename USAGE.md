# Usage Guide

## Getting Started

### Step 1: Install Dependencies

Make sure you have Python 3.7+ installed, then install the required packages:

```bash
pip install -r requirements.txt
```

### Step 2: Prepare Your SAT Question PDFs

Your PDFs should follow this format for best results:

```
1. What is 2 + 2?
A) 1
B) 2
C) 3
D) 4

Answer: D
Explanation: Basic addition shows that 2 + 2 = 4.

2. What is the capital of France?
A) London
B) Berlin
C) Paris
D) Madrid

Answer: C
Explanation: Paris is the capital and largest city of France.
```

**Important formatting tips:**
- Questions should be numbered (1., 2., Question 1, etc.)
- Answer choices should use letters A, B, C, D followed by ) or .
- The correct answer should be clearly marked with "Answer: X"
- Explanations should follow with "Explanation:" label

### Step 3: Parse Your PDFs

Place your PDF in the project directory and run:

```bash
python parser/pdf_parser.py my_questions.pdf --set-name "Math Section 1"
```

Options:
- `--output` or `-o`: Specify output file path (default: output/<filename>.json)
- `--set-name` or `-n`: Name for this question set (default: "SAT Questions")

Example:
```bash
python parser/pdf_parser.py sat_math.pdf -n "SAT Math Practice" -o question_banks/math_section1.json
```

### Step 4: Verify the Parsed JSON

Open the generated JSON file and verify it looks correct:

```json
{
  "set_name": "Math Section 1",
  "questions": [
    {
      "id": 1,
      "question": "What is 2 + 2?",
      "choices": {
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "4"
      },
      "correct_answer": "D",
      "explanation": "Basic addition shows that 2 + 2 = 4."
    }
  ]
}
```

### Step 5: Move to Question Banks

If you used the default output location, copy your file to question_banks:

```bash
cp output/my_questions.json question_banks/
```

### Step 6: Update app.js

Edit `web/app.js` and add your new question bank file to the list:

```javascript
const questionBankFiles = [
    '../question_banks/sample_questions.json',
    '../question_banks/my_questions.json'  // Add your file here
];
```

### Step 7: Open the Quiz

Simply open `web/index.html` in your browser:

```bash
# On Mac:
open web/index.html

# On Linux:
xdg-open web/index.html

# On Windows:
start web/index.html
```

Or just double-click the `index.html` file in your file explorer.

## Using the Quiz Interface

1. **Select Question Sets**: Check the boxes for which question banks you want to include
2. **Start Quiz**: Click "Start Quiz" when ready
3. **Answer Questions**: Click on your choice for each question
4. **Navigate**: Use Previous/Next buttons to move through questions
5. **Submit**: Click "Submit Quiz" on the last question
6. **Review Results**: See your score and review explanations for incorrect answers

## Tips for Better Results

### PDF Parsing Tips

1. **Clean formatting**: The cleaner your PDF formatting, the better the parsing
2. **Consistent patterns**: Use consistent question numbering and choice formatting
3. **One question per section**: Avoid running questions together
4. **Check the output**: Always review the generated JSON to ensure accuracy

### If Parsing Fails

If the parser doesn't work well with your PDFs:

1. Check that your PDF follows the expected format
2. Try extracting text manually and fixing formatting
3. Consider creating JSON files manually for small sets
4. Adjust the regex patterns in `pdf_parser.py` for your specific format

### Manual JSON Creation

You can always create question banks manually:

```json
{
  "set_name": "Custom Questions",
  "questions": [
    {
      "id": 1,
      "question": "Your question here?",
      "choices": {
        "A": "Choice 1",
        "B": "Choice 2",
        "C": "Choice 3",
        "D": "Choice 4"
      },
      "correct_answer": "A",
      "explanation": "Why A is correct..."
    }
  ]
}
```

## Advanced Usage

### Creating Multiple Question Banks

Organize your questions by topic:

```
question_banks/
├── math_algebra.json
├── math_geometry.json
├── reading_comprehension.json
└── writing_grammar.json
```

### Batch Processing PDFs

Create a simple bash script to process multiple PDFs:

```bash
#!/bin/bash
for pdf in pdfs/*.pdf; do
    filename=$(basename "$pdf" .pdf)
    python parser/pdf_parser.py "$pdf" -n "$filename" -o "question_banks/${filename}.json"
done
```

## Troubleshooting

### Quiz won't load question banks

- Check browser console (F12) for errors
- Verify JSON files are valid (use a JSON validator)
- Make sure file paths in `app.js` are correct

### Parser extracts incorrect data

- Review your PDF formatting
- Check for special characters or unusual formatting
- Try processing one question at a time to identify issues

### Questions appear scrambled

- Ensure questions are numbered sequentially
- Check that there's clear separation between questions
- Verify the regex patterns match your PDF format

## Contributing

Feel free to improve this project! Some ideas:

- Add support for images in questions
- Implement shuffle mode for questions
- Add timer functionality
- Create study mode with hints
- Export results to PDF
- Add progress tracking over time

## Need Help?

Check out the README.md for more information or create an issue if you encounter problems.
