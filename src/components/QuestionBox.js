import React, { useState } from 'react';
import questions from '../questions';
 

export default function QuestionBox() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleHighlight = () => {
    setIsHighlighted(true);
  };

  const handleRemoveHighlight = () => {
    setIsHighlighted(false);
  };

  return (
    <div>
      <div className={`Question-container ${isHighlighted ? 'highlighted' : ''}`}>
        <h2>Question 1 out of 5</h2>
        <h1 className={isHighlighted ? 'highlighted-text' : ''}>What is ReactJS?</h1>
        <button onClick={handleHighlight}>Highlight</button>
        <button onClick={handleRemoveHighlight}>Remove Highlight</button>
      </div>
    </div>
  );
}
