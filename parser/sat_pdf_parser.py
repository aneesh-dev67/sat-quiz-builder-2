#!/usr/bin/env python3
"""
SAT Question PDF Parser - College Board Format

Specialized parser for College Board SAT PDFs that have the format:
- Question ID
- Question text
- Choices A, B, C, D
- Answer section with correct answer
- Rationale/Explanation

Usage:
    python sat_pdf_parser.py input.pdf [--output output.json] [--set-name "Question Set"]
"""

import pdfplumber
import json
import re
import argparse
import sys
from pathlib import Path


def extract_sat_questions_from_pdf(pdf_path):
    """
    Extract SAT questions from College Board formatted PDFs.
    
    Expected format:
    Question ID [id]
    ID: [id]
    [Question text]
    A. choice
    B. choice  
    C. choice
    D. choice
    
    ID: [id] Answer
    Correct Answer: X
    Rationale
    [explanation text]
    """
    questions = []
    
    with pdfplumber.open(pdf_path) as pdf:
        full_text = ""
        
        # Extract all text from PDF
        for page in pdf.pages:
            full_text += page.extract_text() + "\n"
    
    # Split by "Question ID" to get individual questions
    question_blocks = re.split(r'Question ID [a-f0-9]+', full_text)
    
    question_counter = 1
    
    for block in question_blocks[1:]:  # Skip first empty block
        try:
            parsed = parse_sat_question_block(block, question_counter)
            if parsed:
                questions.append(parsed)
                question_counter += 1
        except Exception as e:
            print(f"Warning: Could not parse question {question_counter}: {e}")
            continue
    
    return questions


def parse_sat_question_block(block, question_id):
    """
    Parse a single SAT question block.
    """
    
    # Extract the question text (everything before choices)
    # Look for pattern where choices start with A) or A.
    choice_pattern = r'\n([A-D])[\.\)]'
    choice_match = re.search(choice_pattern, block)
    
    if not choice_match:
        return None
    
    question_text = block[:choice_match.start()].strip()
    
    # Remove the duplicate ID line if present
    question_text = re.sub(r'^ID:\s*[a-f0-9]+\s*\n', '', question_text, flags=re.MULTILINE)
    
    # Clean up the question text
    question_text = ' '.join(question_text.split())
    
    # Extract choices A, B, C, D
    choices = {}
    choice_texts = re.split(r'\n(?=[A-D][\.\)])', block)
    
    for choice_text in choice_texts:
        choice_match = re.match(r'^([A-D])[\.\)]\s*(.+?)(?=\n[A-D][\.\)]|\nID:|\nCorrect Answer:|$)', 
                               choice_text, re.DOTALL)
        if choice_match:
            letter = choice_match.group(1)
            text = choice_match.group(2).strip()
            # Clean up whitespace
            text = ' '.join(text.split())
            choices[letter] = text
    
    # Extract correct answer
    answer_match = re.search(r'Correct Answer:\s*([A-D])', block)
    correct_answer = answer_match.group(1) if answer_match else ""
    
    # Extract explanation/rationale
    rationale_match = re.search(r'Rationale\s+(.+?)(?=Question Difficulty:|Assessment|$)', 
                               block, re.DOTALL)
    
    if rationale_match:
        explanation = rationale_match.group(1).strip()
        # Clean up the explanation
        explanation = ' '.join(explanation.split())
    else:
        explanation = ""
    
    # Only return if we have all required components
    if not choices or not correct_answer or not question_text:
        return None
    
    return {
        "id": question_id,
        "question": question_text,
        "choices": choices,
        "correct_answer": correct_answer,
        "explanation": explanation
    }


def main():
    parser = argparse.ArgumentParser(
        description='Extract SAT questions from College Board PDF format'
    )
    parser.add_argument('input_pdf', help='Path to input PDF file')
    parser.add_argument(
        '--output', '-o',
        help='Output JSON file path (default: output/<input_name>.json)'
    )
    parser.add_argument(
        '--set-name', '-n',
        default='SAT Questions',
        help='Name for this question set (default: SAT Questions)'
    )
    
    args = parser.parse_args()
    
    # Validate input file
    input_path = Path(args.input_pdf)
    if not input_path.exists():
        print(f"Error: Input file '{args.input_pdf}' not found")
        sys.exit(1)
    
    # Determine output path
    if args.output:
        output_path = Path(args.output)
    else:
        output_dir = Path('output')
        output_dir.mkdir(exist_ok=True)
        output_path = output_dir / f"{input_path.stem}.json"
    
    print(f"Parsing College Board SAT PDF: {input_path}")
    print(f"Output will be saved to: {output_path}")
    
    # Extract questions
    try:
        questions = extract_sat_questions_from_pdf(input_path)
        
        if not questions:
            print("Warning: No questions found in PDF")
            print("This parser is designed for College Board SAT format PDFs.")
            print("If your PDF has a different format, you may need to use")
            print("the standard pdf_parser.py or create a custom parser.")
            sys.exit(1)
        
        # Create output structure
        output_data = {
            "set_name": args.set_name,
            "questions": questions
        }
        
        # Save to JSON
        output_path.parent.mkdir(parents=True, exist_ok=True)
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(output_data, f, indent=2, ensure_ascii=False)
        
        print(f"\n✓ Successfully parsed {len(questions)} questions")
        print(f"✓ Saved to: {output_path}")
        print(f"\nNext steps:")
        print(f"  1. Review {output_path} to verify the parsing")
        print(f"  2. Copy to question_banks/ directory:")
        print(f"     cp {output_path} question_banks/")
        print(f"  3. Add to web/app.js questionBankFiles array:")
        print(f"     '../question_banks/{output_path.name}'")
        print(f"  4. Open web/index.html to start using the quiz!")
        
    except Exception as e:
        print(f"Error parsing PDF: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == '__main__':
    main()
