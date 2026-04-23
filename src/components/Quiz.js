import React from "react";

function Quiz({ questionData, currentIndex, handleAnswer }) {
  const question = questionData[currentIndex];

  return (
    <div>
      <h2>{question.question}</h2>

      <div>
        {question.options.map((opt, i) => (
          <button key={i} onClick={() => handleAnswer(opt)}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;