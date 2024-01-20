import React, { useState } from 'react';
import Result from './Result';

function QuestionBox(props) {
  const [correctQue, setcorrectQue] = useState(0);
  const [queNo, setqueNo] = useState(0);
  const [highlight, setHighlight] = useState(false);

  const CheckAnswer = (id) => {
    if (props.Questions[queNo].options[id].isCorrect) {
      setcorrectQue(correctQue + 1);
    }
    setqueNo(queNo + 1);
  };

  const HighlightText = {
    color: highlight ? "red" : "black",
  };

  const Highlight = () => {
    setHighlight(!highlight);
  };

  if (queNo < 5) {
    return (
      <div className="QuestionBox">
        <div className="questionBox">
          <h2>QuickQuizIQ</h2>
          <h3>
            Question <span>{queNo + 1}</span> out of 5
          </h3>
          <h1 className="question" style={HighlightText}>
            {props.Questions[queNo].text}
          </h1>
          <div className="Options-box">
            {props.Questions[queNo].options.map((option, index) => (
              <button
                key={index}
                className="Option-button"
                onClick={() => CheckAnswer(index)}
              >
                {option.text}
              </button>
            ))}
          </div>
          <div className="highlightButtons">
            <button onClick={Highlight}>Highlight</button>
            <button onClick={() => setHighlight(false)}>Remove highlight</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <Result Result={correctQue} />;
  }
}

export default QuestionBox;
