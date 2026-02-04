# SAT Quiz Builder - Cheat Sheet

## 🚀 VS Code Quick Actions

| Action | Command |
|--------|---------|
| Open Command Palette | `Cmd/Ctrl + Shift + P` |
| Quick Open File | `Cmd/Ctrl + P` |
| Toggle Terminal | `Ctrl + `` |
| Parse PDF | `Cmd/Ctrl + Shift + P` → "Tasks: Parse PDF" |
| Open Quiz | `Cmd/Ctrl + Shift + P` → "Tasks: Open Quiz in Browser" |
| Format Document | `Cmd/Ctrl + Shift + F` |

## 📝 JSON Snippets

| Type this | Then press | Creates |
|-----------|------------|---------|
| `sat-set` | `Tab` | New question set |
| `sat-q` | `Tab` | Single question |
| `sat-questions` | `Tab` | Multiple questions |

## 🔄 Common Workflows

### Add Questions from PDF
```bash
# 1. Parse PDF
python parser/pdf_parser.py file.pdf --set-name "My Questions"

# 2. Copy to question banks
cp output/file.json question_banks/

# 3. Update app.js
# Add '../question_banks/file.json' to questionBankFiles array

# 4. Test
# Right-click web/index.html → Open with Live Server
```

### Create Questions Manually
```bash
# 1. Create new JSON file
touch question_banks/my_questions.json

# 2. In VS Code, type: sat-set [Tab]
# Fill in questions

# 3. Update app.js
# Add '../question_banks/my_questions.json'

# 4. Test
# Open with Live Server
```

## 🎯 File Locations

| What | Where |
|------|-------|
| PDFs to parse | Project root or anywhere |
| Parsed output | `output/` |
| Final questions | `question_banks/` |
| Quiz interface | `web/index.html` |
| Parser script | `parser/pdf_parser.py` |

## 🐛 Debug Commands

```bash
# Validate JSON
python -m json.tool question_banks/file.json

# Test parser on specific PDF
python parser/pdf_parser.py test.pdf -n "Test" -o output/test.json

# Check Python dependencies
pip list | grep -E "(pypdf|pdfplumber)"

# Install missing dependencies
pip install -r requirements.txt
```

## 🌐 Browser Testing

| Method | Command |
|--------|---------|
| Live Server | Right-click `index.html` → Open with Live Server |
| Manual | Open `web/index.html` in browser |
| Mac | `open web/index.html` |
| Linux | `xdg-open web/index.html` |
| Windows | `start web/index.html` |

## 📋 Question JSON Template

```json
{
  "set_name": "Question Set Name",
  "questions": [
    {
      "id": 1,
      "question": "Question text?",
      "choices": {
        "A": "Choice A",
        "B": "Choice B",
        "C": "Choice C",
        "D": "Choice D"
      },
      "correct_answer": "A",
      "explanation": "Why A is correct"
    }
  ]
}
```

## 🔧 VS Code Extensions

**Must Have:**
- Python (`ms-python.python`)
- Live Server (`ritwickdey.liveserver`)
- Prettier (`esbenp.prettier-vscode`)

**Nice to Have:**
- Path Intellisense
- GitLens
- Better Comments

## ⌨️ Keyboard Shortcuts

| Action | Mac | Windows/Linux |
|--------|-----|---------------|
| Save All | `Cmd + K, S` | `Ctrl + K, S` |
| Close File | `Cmd + W` | `Ctrl + W` |
| Split Editor | `Cmd + \` | `Ctrl + \` |
| Go to Line | `Ctrl + G` | `Ctrl + G` |
| Find in Files | `Cmd + Shift + F` | `Ctrl + Shift + F` |
| Comment Line | `Cmd + /` | `Ctrl + /` |
| Duplicate Line | `Shift + Alt + ↓` | `Shift + Alt + ↓` |
| Move Line | `Alt + ↓` | `Alt + ↓` |

## 🎨 Common Customizations

**Change Theme:**
`Cmd/Ctrl + K, Cmd/Ctrl + T`

**Change Font Size:**
`.vscode/settings.json`:
```json
{
  "editor.fontSize": 14
}
```

**Change Tab Size:**
Already set! Python=4, JS/HTML/CSS=2

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Python not found | `Cmd/Ctrl + Shift + P` → "Python: Select Interpreter" |
| Live Server not working | Install extension, reload VS Code |
| JSON errors | Check for missing commas/quotes |
| Parser fails | Check PDF format matches expected pattern |
| Quiz not loading questions | Check file paths in `app.js` |

## 📚 Quick Links

- Full Setup: `VS_CODE_GUIDE.md`
- Detailed Usage: `USAGE.md`
- Fast Reference: `QUICK_START.md`
- File Structure: `PROJECT_STRUCTURE.md`

---

**Save this file for quick reference! 📌**
