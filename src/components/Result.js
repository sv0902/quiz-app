import React from "react";

function Result({ score, total, restartQuiz }) {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Quiz Finished 🎉</h1>
      <h2>
        Your Score: {score} / {total}
      </h2>

      <button onClick={restartQuiz} style={{ padding: "10px", marginTop: "20px" }}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;