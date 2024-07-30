import React, { useState, useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';

export default function Quiz() {
    const { score, setScore, setGameState, questions } = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        if (questions[currQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setOptionChosen("");
        setCurrQuestion(currQuestion + 1);
    };

    const previousQuestion = () => {
        if (currQuestion > 0) {
            setOptionChosen("");
            setCurrQuestion(currQuestion - 1);
        }
    };

    const finishQuiz = () => {
        if (questions[currQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setGameState("endScreen");
    };

    const handleOptionClick = (option) => {
        setOptionChosen((prevOption) => (prevOption === option ? "" : option));
    };

    const getOptionClass = (option) => {
        return option === optionChosen ? 'chosen' : '';
    };

    return (
        <div className="Quiz">
            <h1>{questions[currQuestion].prompt}</h1>
            <div className='otp-container'>
                <div className='options'>
                    <button className={`btn1 ${getOptionClass("A")}`} onClick={() => handleOptionClick("A")}>
                        {optionChosen === "A" ? "✅ " : ""}{questions[currQuestion].optionA}
                    </button>
                    <button className={`btn2 ${getOptionClass("B")}`} onClick={() => handleOptionClick("B")}>
                        {optionChosen === "B" ? "✅ " : ""}{questions[currQuestion].optionB}
                    </button>
                    <button className={`btn3 ${getOptionClass("C")}`} onClick={() => handleOptionClick("C")}>
                        {optionChosen === "C" ? "✅ " : ""}{questions[currQuestion].optionC}
                    </button>
                    <button className={`btn4 ${getOptionClass("D")}`} onClick={() => handleOptionClick("D")}>
                        {optionChosen === "D" ? "✅ " : ""}{questions[currQuestion].optionD}
                    </button>
                </div>
            </div>
            <div className='btn-container'>
                {currQuestion > 0 && (
                    <button className='btn' onClick={previousQuestion}>Previous Question</button>
                )}
                {currQuestion === questions.length - 1 ? (
                    <button className='btn' onClick={finishQuiz}>Finish Quiz</button>
                ) : (
                    <button className='btn' onClick={nextQuestion}>Next Question</button>
                )}
            </div>
        </div>
    );
}
