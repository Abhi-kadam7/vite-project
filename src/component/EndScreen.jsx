import React, { useContext } from 'react';
import { QuizContext } from "../Helpers/Contexts";
import { Question } from '../Helpers/QuestionBank';
import "../App.css";

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  // Ensure the number of questions is set to 10 or any desired number
  const totalQuestions = 10;

  return (
    <div className='EndScreen'>
      <h2>Quiz Completed</h2>
      <h3>Marks: {score} / {totalQuestions}</h3>
      <button className='btn' onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
