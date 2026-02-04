# SAT Quiz Builder - PDF Parser

This directory contains the PDF parser to convert your College Board SAT question PDFs into JSON format.

## SAT PDF Parser - For College Board SAT PDFs

Use this for **official College Board SAT practice questions** that look like this:

```
Question ID abc123
ID: abc123
The following text is adapted from...

What does the author mean?
A. First choice
B. Second choice
C. Third choice
D. Fourth choice

ID: abc123 Answer
Correct Answer: B
Rationale
The text states that...
```

**Usage:**
```bash
python sat_pdf_parser.py your_sat_questions.pdf --set-name "Reading Section 1"
```

## Installation

Install the required dependencies:

```bash
pip install -r ../requirements.txt
```

## Full Usage Examples

### Basic Usage

```bash
# Parse a College Board SAT PDF
python sat_pdf_parser.py sat_reading.pdf --set-name "SAT Reading"
```

### Specify Custom Output Location

```bash
# Save directly to question_banks directory
python sat_pdf_parser.py sat_math.pdf -o ../question_banks/math_section1.json -n "Math Section 1"
```

## After Parsing

Once you've parsed your PDF:

1. **Check the output** - Review the JSON file in `output/` directory
2. **Copy to question banks** - Move the file to `question_banks/`
   ```bash
   cp output/your_file.json ../question_banks/
   ```
3. **Update the web app** - Add the file path to `web/app.js`:
   ```javascript
   const questionBankFiles = [
       '../question_banks/sample_questions.json',
       '../question_banks/your_file.json'  // Add this line
   ];
   ```
4. **Test it** - Open `web/index.html` in your browser!

## Troubleshooting

### Parser doesn't find any questions
- **Solution:** Make sure your PDF is in College Board format with "Question ID" markers

### Questions are incomplete or missing choices
- **Solution:** Check that choices are labeled A., B., C., D. or A), B), C), D)

### Answers or explanations are missing
- **Solution:** Verify your PDF has "Correct Answer:" and "Rationale" sections

### General Tips

- **Clean PDFs work best** - PDFs with clear formatting are easier to parse
- **Check the JSON** - Always review the output before using it
- **Manual fixes OK** - You can edit the JSON file manually if needed

## Need Help?

See the main documentation:
- **USAGE.md** - Comprehensive usage guide
- **VS_CODE_GUIDE.md** - VS Code tips for working with the project
- **CHEAT_SHEET.md** - Quick reference for all commands
