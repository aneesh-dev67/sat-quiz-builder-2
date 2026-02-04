# Project Structure Overview

```
sat-quiz-builder/
│
├── 📄 README.md                        # Main project documentation
├── 📄 QUICK_START.md                   # Fast setup reference
├── 📄 USAGE.md                         # Detailed usage instructions
├── 📄 VS_CODE_GUIDE.md                 # VS Code optimization guide
├── 📄 requirements.txt                 # Python dependencies
├── 📄 .gitignore                       # Git ignore rules
├── 📄 sat-quiz-builder.code-workspace  # VS Code workspace file
│
├── 📁 .vscode/                         # VS Code configuration
│   ├── settings.json                   # Editor settings
│   ├── tasks.json                      # Custom tasks (parse PDF, etc.)
│   ├── launch.json                     # Debugging configurations
│   ├── extensions.json                 # Recommended extensions
│   └── sat-quiz.code-snippets         # Code snippets for JSON editing
│
├── 📁 parser/                          # PDF to JSON conversion
│   └── pdf_parser.py                   # Main parsing script
│
├── 📁 question_banks/                  # Store your question sets here
│   └── sample_questions.json           # Example question set
│
├── 📁 output/                          # Temporary output from parser
│   └── (parsed JSON files go here)
│
└── 📁 web/                             # Quiz web application
    ├── index.html                      # Main quiz interface
    ├── style.css                       # Styling
    └── app.js                          # Quiz logic
```

## File Purposes

### Documentation Files

- **README.md** - Overview, features, setup instructions
- **QUICK_START.md** - TL;DR version for quick reference
- **USAGE.md** - Comprehensive guide with examples and troubleshooting
- **VS_CODE_GUIDE.md** - VS Code tips, shortcuts, and workflows

### Configuration Files

- **requirements.txt** - Python packages needed (pypdf, pdfplumber)
- **.gitignore** - Files to exclude from Git
- **sat-quiz-builder.code-workspace** - VS Code workspace with settings

### VS Code Configuration (.vscode/)

- **settings.json** - Editor preferences, formatting rules
- **tasks.json** - Quick actions (parse PDF, open browser, etc.)
- **launch.json** - Debugging configurations
- **extensions.json** - Recommended VS Code extensions
- **sat-quiz.code-snippets** - Shortcuts for creating JSON questions

### Parser (parser/)

- **pdf_parser.py** - Extracts questions from PDFs and saves as JSON
  - Handles question text, multiple choices, answers, explanations
  - Command-line interface with helpful prompts

### Question Banks (question_banks/)

- Store all your question sets as JSON files
- Each file contains a set_name and array of questions
- Can have multiple files (math, reading, writing, etc.)
- Sample provided to show format

### Output (output/)

- Temporary storage for newly parsed PDF questions
- Review files here before moving to question_banks/
- Git ignores this folder by default (configurable)

### Web Application (web/)

- **index.html** - Quiz interface structure
  - Setup screen (select question sets)
  - Quiz screen (answer questions)
  - Results screen (review answers)

- **style.css** - Beautiful, responsive design
  - Modern gradient design
  - Mobile-friendly
  - Clear visual feedback

- **app.js** - Quiz functionality
  - Loads question banks
  - Manages quiz state
  - Tracks answers
  - Shows results with explanations

## Data Flow

```
PDF File
   ↓
parser/pdf_parser.py
   ↓
output/questions.json
   ↓  (review & copy)
question_banks/questions.json
   ↓  (update app.js)
web/app.js loads questions
   ↓
web/index.html displays quiz
   ↓
User takes quiz
   ↓
Results show correct/incorrect + explanations
```

## VS Code Workflow

```
Open workspace file
   ↓
Install recommended extensions (one-click)
   ↓
Run task: "Parse PDF" → Creates JSON
   ↓
Copy to question_banks/
   ↓
Edit web/app.js (add new file path)
   ↓
Right-click index.html → "Open with Live Server"
   ↓
Test quiz in browser with auto-reload!
```

## Quick Actions in VS Code

**Cmd/Ctrl + Shift + P** then:
- "Tasks: Parse PDF" - Convert PDF to JSON
- "Tasks: Open Quiz in Browser" - Launch quiz
- "Tasks: Install Python Dependencies" - Setup Python packages

**Right-click web/index.html**:
- "Open with Live Server" - Live preview with auto-reload

**JSON Editing**:
- Type `sat-set` + Tab - New question set template
- Type `sat-q` + Tab - New question template
- Type `sat-questions` + Tab - Multiple questions template

## Next Steps

1. ✅ Open `sat-quiz-builder.code-workspace` in VS Code
2. ✅ Install recommended extensions (VS Code will prompt)
3. ✅ Run task: "Install Python Dependencies"
4. ✅ Try parsing a PDF or edit sample_questions.json
5. ✅ Open web/index.html with Live Server
6. ✅ Take your first quiz!

---

For detailed instructions, see **VS_CODE_GUIDE.md**
