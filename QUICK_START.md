# Quick Start Reference

## 📦 Installation
```bash
pip install -r requirements.txt
```

## 🔄 Convert PDF to JSON

```bash
python parser/sat_pdf_parser.py your_file.pdf --set-name "Section Name"
```

## 📁 Move to Question Bank
```bash
cp output/your_file.json question_banks/
```

## ✏️ Update app.js
Add your file to the questionBankFiles array:
```javascript
const questionBankFiles = [
    '../question_banks/sample_questions.json',
    '../question_banks/your_file.json'  // Add here
];
```

## 🚀 Launch Quiz
Open `web/index.html` in your browser

## 📝 PDF Format Expected
```
1. Question text here?
A) First choice
B) Second choice
C) Third choice
D) Fourth choice

Answer: B
Explanation: Why B is correct.
```

## 🎯 Workflow
1. Parse PDF → 2. Copy to question_banks/ → 3. Update app.js → 4. Open quiz → 5. Select sets → 6. Take quiz!
