# VS Code Setup Guide

## 🚀 Quick Setup

### 1. Open the Project in VS Code

**Option A: Use the Workspace File (Recommended)**
```bash
# Double-click this file or run:
code sat-quiz-builder.code-workspace
```

**Option B: Open the Folder**
```bash
code sat-quiz-builder/
```

### 2. Install Recommended Extensions

When you open the project, VS Code will prompt you to install recommended extensions. Click **Install All**.

Or install manually:
- **Python** (ms-python.python) - Python support and debugging
- **Prettier** (esbenp.prettier-vscode) - Code formatting for HTML/CSS/JS
- **Live Server** (ritwickdey.liveserver) - Live preview of your quiz
- **Path Intellisense** (christian-kohler.path-intellisense) - File path autocomplete

### 3. Install Python Dependencies

Press `Cmd/Ctrl + Shift + P` → Type **"Tasks: Run Task"** → Select **"Install Python Dependencies"**

Or run manually:
```bash
pip install -r requirements.txt
```

## 📁 Project Navigation

### File Explorer Sidebar
The project is organized into clear sections:
```
sat-quiz-builder/
├── 📄 README.md           # Project overview
├── 📄 QUICK_START.md      # Fast reference
├── 📄 USAGE.md            # Detailed guide
├── 📄 VS_CODE_GUIDE.md    # This file
├── 🐍 parser/             # PDF parsing scripts
├── 📚 question_banks/     # Your question JSON files
├── 🌐 web/                # Quiz interface
└── 📦 output/             # Parsed PDFs go here
```

### Quick Navigation Tips

**Jump to File:** `Cmd/Ctrl + P`
- Type filename to quickly open any file
- Examples: `app.js`, `parser.py`, `style.css`

**Search in Project:** `Cmd/Ctrl + Shift + F`
- Search across all files
- Great for finding where specific questions are used

**File Explorer:** `Cmd/Ctrl + B`
- Toggle sidebar visibility

**Breadcrumbs:** Enabled by default at top of editor
- Click to navigate file structure

## ⚡ Quick Actions (Tasks)

Press `Cmd/Ctrl + Shift + P` → Type **"Tasks: Run Task"** then select:

### 1. **Parse PDF**
- Converts a PDF to JSON
- Will prompt you for:
  - PDF file path
  - Question set name
- Output goes to `output/` folder

### 2. **Open Quiz in Browser**
- Opens `web/index.html` in your default browser
- Fastest way to test your quiz

### 3. **Install Python Dependencies**
- Runs `pip install -r requirements.txt`
- Use when setting up project

### 4. **Validate JSON Files**
- Checks if current JSON file is valid
- Helpful when manually editing questions

## 🐛 Debugging

### Debug Python Parser

1. Open `parser/pdf_parser.py`
2. Set breakpoints (click left of line numbers)
3. Press `F5` or click **Run and Debug** sidebar
4. Select **"Python: Parse PDF"**
5. Enter PDF path when prompted

### Debug Web App

1. Install Live Server extension
2. Right-click `web/index.html`
3. Click **"Open with Live Server"**
4. Press `F12` in browser for DevTools

## ✨ Code Snippets

When editing `.json` files in `question_banks/`:

### Create New Question Set
Type `sat-set` then press `Tab`

### Add Single Question
Type `sat-q` then press `Tab`

### Add Multiple Questions
Type `sat-questions` then press `Tab`

Press `Tab` to jump between fields!

## 🎨 Formatting

Files auto-format on save! Configured for:
- **Python**: 4-space indentation, imports organized
- **JavaScript/HTML/CSS**: 2-space indentation, Prettier formatting
- **JSON**: 2-space indentation

### Manual Format
`Cmd/Ctrl + Shift + F` or right-click → **Format Document**

## 🔍 Search & Replace

### Search in Current File
`Cmd/Ctrl + F`

### Search in All Files
`Cmd/Ctrl + Shift + F`

### Replace in Current File
`Cmd/Ctrl + H`

### Replace in All Files
`Cmd/Ctrl + Shift + H`

**Pro Tip:** Use regex for advanced find/replace!

## 📝 Useful Keyboard Shortcuts

| Action | Mac | Windows/Linux |
|--------|-----|---------------|
| Command Palette | `Cmd + Shift + P` | `Ctrl + Shift + P` |
| Quick Open File | `Cmd + P` | `Ctrl + P` |
| Toggle Terminal | `Ctrl + ` | `Ctrl + ` |
| Toggle Sidebar | `Cmd + B` | `Ctrl + B` |
| Split Editor | `Cmd + \` | `Ctrl + \` |
| Close Editor | `Cmd + W` | `Ctrl + W` |
| Save All | `Cmd + K, S` | `Ctrl + K, S` |
| Find in Files | `Cmd + Shift + F` | `Ctrl + Shift + F` |
| Go to Line | `Ctrl + G` | `Ctrl + G` |
| Comment Line | `Cmd + /` | `Ctrl + /` |

## 🌐 Live Preview (Web App)

### Using Live Server Extension (Recommended)

1. Install **Live Server** extension
2. Right-click `web/index.html`
3. Select **"Open with Live Server"**
4. Browser opens automatically
5. Auto-refreshes when you save changes!

### Manual Preview
Simply open `web/index.html` in your browser

## 📊 Multi-Root Workspace Benefits

The `.code-workspace` file provides:
- ✅ Consistent settings across machines
- ✅ Recommended extensions auto-install
- ✅ Custom tasks for common operations
- ✅ Debugging configurations ready to use
- ✅ Better organization for multi-file projects

## 🎯 Workflow Example

### Creating Questions from PDF

1. **Parse PDF:**
   - Press `Cmd/Ctrl + Shift + P`
   - Run Task: "Parse PDF"
   - Enter PDF path and set name

2. **Verify Output:**
   - Open `output/yourfile.json`
   - Check formatting (VS Code will show errors if invalid JSON)

3. **Move to Question Bank:**
   ```bash
   cp output/yourfile.json question_banks/
   ```

4. **Update Web App:**
   - Open `web/app.js`
   - Add your file to `questionBankFiles` array

5. **Test:**
   - Right-click `web/index.html`
   - "Open with Live Server"
   - Select your question set!

### Manual Question Creation

1. Create new file in `question_banks/`
2. Type `sat-set` + `Tab`
3. Fill in set name
4. Type `sat-q` + `Tab` for each question
5. Save file
6. Update `web/app.js`
7. Test with Live Server!

## 🔧 Customization

### Change Editor Settings
Edit `.vscode/settings.json`:
```json
{
  "editor.fontSize": 14,
  "editor.lineHeight": 22,
  "editor.tabSize": 2
}
```

### Add More Tasks
Edit `.vscode/tasks.json` to add custom commands

### Add More Snippets
Edit `.vscode/sat-quiz.code-snippets` for your own shortcuts

## 🆘 Troubleshooting

### Extensions Not Installing
- Open Extensions sidebar (`Cmd/Ctrl + Shift + X`)
- Search for recommended extensions manually
- Install individually

### Python Not Found
- Install Python 3.7+
- Set Python interpreter: `Cmd/Ctrl + Shift + P` → "Python: Select Interpreter"

### Live Server Not Working
- Make sure extension is installed
- Check that `web/index.html` is the active file
- Try reloading VS Code

### JSON Errors
- Use "Validate JSON Files" task
- Check for missing commas, quotes
- Use VS Code's built-in JSON validation (shows red squiggles)

## 💡 Pro Tips

1. **Multi-Cursor Editing**: Hold `Alt/Option` and click to place multiple cursors
2. **Column Selection**: `Shift + Alt/Option` + drag mouse
3. **Duplicate Line**: `Shift + Alt/Option + Up/Down`
4. **Move Line**: `Alt/Option + Up/Down`
5. **Zen Mode**: `Cmd/Ctrl + K, Z` for distraction-free editing
6. **Minimap**: Shows file overview on right side (enabled by default)
7. **Breadcrumbs**: Click path at top to jump to symbols/files

## 📚 Learn More

- [VS Code Python Tutorial](https://code.visualstudio.com/docs/python/python-tutorial)
- [VS Code Web Development](https://code.visualstudio.com/docs/languages/html)
- [VS Code Keyboard Shortcuts](https://code.visualstudio.com/docs/getstarted/keybindings)

---

**Happy Coding! 🎉** Your SAT Quiz Builder is now fully optimized for VS Code!
