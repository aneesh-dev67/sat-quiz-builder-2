# 📖 SAT Quiz Builder - Documentation Index

Welcome to your SAT Quiz Builder! This index will help you find what you need quickly.

## 🚀 Getting Started

**New to the project?** Start here:
1. Read **[README.md](README.md)** - Project overview
2. Follow **[QUICK_START.md](QUICK_START.md)** - 5-minute setup
3. Check **[VS_CODE_GUIDE.md](VS_CODE_GUIDE.md)** - VS Code setup

## 📚 Documentation Files

### Quick Reference
- **[CHEAT_SHEET.md](CHEAT_SHEET.md)** ⭐ - All commands in one place
- **[QUICK_START.md](QUICK_START.md)** - Fast setup reference
- **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - File organization

### Detailed Guides
- **[README.md](README.md)** - Main documentation
- **[USAGE.md](USAGE.md)** - Comprehensive usage guide
- **[VS_CODE_GUIDE.md](VS_CODE_GUIDE.md)** - VS Code optimization

### Configuration
- **[requirements.txt](requirements.txt)** - Python dependencies
- **[.gitignore](.gitignore)** - Git exclusions
- **[sat-quiz-builder.code-workspace](sat-quiz-builder.code-workspace)** - VS Code workspace

## 📁 Project Directories

```
sat-quiz-builder/
│
├── 📚 Documentation (you are here!)
│   ├── README.md
│   ├── QUICK_START.md
│   ├── USAGE.md
│   ├── VS_CODE_GUIDE.md
│   ├── CHEAT_SHEET.md
│   ├── PROJECT_STRUCTURE.md
│   └── INDEX.md (this file)
│
├── ⚙️ Configuration
│   ├── .vscode/                    VS Code settings
│   ├── requirements.txt             Python packages
│   ├── .gitignore                   Git exclusions
│   └── sat-quiz-builder.code-workspace
│
├── 🐍 Parser (PDF → JSON)
│   └── parser/pdf_parser.py         Convert PDFs to questions
│
├── 📦 Question Banks (Your Questions)
│   └── question_banks/
│       └── sample_questions.json    Example questions
│
├── 📤 Output (Temporary)
│   └── output/                      Parsed PDFs land here
│
└── 🌐 Web App (Quiz Interface)
    └── web/
        ├── index.html               Main page
        ├── style.css                Styling
        └── app.js                   Quiz logic
```

## 🎯 Common Tasks

### I want to...

**Parse a PDF into questions**
→ See [QUICK_START.md](QUICK_START.md#convert-pdf-to-json)
→ Or [USAGE.md](USAGE.md#step-3-parse-your-pdfs)

**Create questions manually**
→ See [USAGE.md](USAGE.md#manual-json-creation)
→ Use snippets in [VS_CODE_GUIDE.md](VS_CODE_GUIDE.md#code-snippets)

**Set up VS Code**
→ Follow [VS_CODE_GUIDE.md](VS_CODE_GUIDE.md#quick-setup)

**Run the quiz**
→ See [QUICK_START.md](QUICK_START.md#launch-quiz)
→ Or [VS_CODE_GUIDE.md](VS_CODE_GUIDE.md#live-preview-web-app)

**Debug the parser**
→ See [VS_CODE_GUIDE.md](VS_CODE_GUIDE.md#debugging)

**Find keyboard shortcuts**
→ See [CHEAT_SHEET.md](CHEAT_SHEET.md#keyboard-shortcuts)

**Understand the project structure**
→ See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)

**Troubleshoot issues**
→ See [USAGE.md](USAGE.md#troubleshooting)
→ Or [VS_CODE_GUIDE.md](VS_CODE_GUIDE.md#troubleshooting)

## 🔧 VS Code Files (.vscode/)

- **[settings.json](.vscode/settings.json)** - Editor preferences
- **[tasks.json](.vscode/tasks.json)** - Custom tasks (parse PDF, etc.)
- **[launch.json](.vscode/launch.json)** - Debugging configs
- **[extensions.json](.vscode/extensions.json)** - Recommended extensions
- **[sat-quiz.code-snippets](.vscode/sat-quiz.code-snippets)** - Code shortcuts

## 🔑 Key Concepts

**Question Banks** - JSON files with quiz questions
- Location: `question_banks/`
- Format: See [USAGE.md](USAGE.md#question-json-format)

**Parser** - Converts PDFs to JSON
- Location: `parser/pdf_parser.py`
- Usage: See [QUICK_START.md](QUICK_START.md#convert-pdf-to-json)

**Web App** - Interactive quiz interface
- Location: `web/`
- Files: `index.html`, `style.css`, `app.js`

**Output** - Temporary storage for parsed questions
- Location: `output/`
- Purpose: Review before moving to question_banks/

## 📖 How to Read This Project

### If you have 5 minutes:
1. Read [QUICK_START.md](QUICK_START.md)
2. Open workspace in VS Code
3. Try the sample quiz

### If you have 15 minutes:
1. Read [README.md](README.md)
2. Read [VS_CODE_GUIDE.md](VS_CODE_GUIDE.md)
3. Parse a sample PDF
4. Create your first quiz

### If you have an hour:
1. Read all documentation
2. Set up VS Code completely
3. Parse multiple PDFs
4. Customize the web interface
5. Create comprehensive question banks

## 🆘 Getting Help

**Quick answers:** [CHEAT_SHEET.md](CHEAT_SHEET.md)

**Setup help:** [VS_CODE_GUIDE.md](VS_CODE_GUIDE.md#troubleshooting)

**Usage help:** [USAGE.md](USAGE.md#troubleshooting)

**PDF parsing issues:** [USAGE.md](USAGE.md#if-parsing-fails)

## 🎓 Learning Path

1. **Beginner**
   - Read QUICK_START.md
   - Use sample questions
   - Take a quiz
   
2. **Intermediate**
   - Parse your first PDF
   - Create question banks
   - Customize VS Code
   
3. **Advanced**
   - Batch process PDFs
   - Create custom snippets
   - Modify the web interface

## 📝 Quick Commands

```bash
# Open workspace
code sat-quiz-builder.code-workspace

# Parse PDF
python parser/pdf_parser.py file.pdf --set-name "My Set"

# Validate JSON
python -m json.tool question_banks/file.json

# Open quiz
open web/index.html  # Mac
```

## 🎯 Next Steps

Choose your path:

**Just want to use it?**
→ [QUICK_START.md](QUICK_START.md)

**Want to understand it?**
→ [README.md](README.md) → [USAGE.md](USAGE.md)

**Want to optimize it?**
→ [VS_CODE_GUIDE.md](VS_CODE_GUIDE.md) → [CHEAT_SHEET.md](CHEAT_SHEET.md)

**Want to customize it?**
→ [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) → Code files

---

**Happy studying! 📚✨**

*This project is designed to help you ace the SAT. Good luck!*
