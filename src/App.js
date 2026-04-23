import React, { useState } from "react";
import { questions } from "./data/questions";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentIndex].answer) {
      setScore(score + 1);
    }

    const next = currentIndex + 1;

    if (next < questions.length) {
      setCurrentIndex(next);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="app">
      <div className="quiz-box">
        <h1>Quiz App</h1>

        {showResult ? (
          <Result
            score={score}
            total={questions.length}
            restartQuiz={restartQuiz}
          />
        ) : (
          <Quiz
            questionData={questions}
            currentIndex={currentIndex}
            handleAnswer={handleAnswer}
          />
        )}
      </div>
    </div>
  );
}

export default App;