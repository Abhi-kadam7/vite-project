import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import '../App.css';
import { Question } from "../Helpers/QuestionBank";

export default function MainMenu() {
    const { setGameState, setQuestions } = useContext(QuizContext);

    const getRandomQuestions = (questions, num) => {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };

    const startQuiz = () => {
        const randomQuestions = getRandomQuestions(Question, 10);
        setQuestions(randomQuestions);
        setGameState("quiz");
    };

    return (
        <>
            <div className="Rules">
                <h2>Rules</h2>
                <ol className="container2">
                    <li>Each question has four options. You can choose only one option.</li>
                    <li>You can review and change answers before the quiz finishes.</li>
                    <li>The result will be declared at the end of the quiz.</li>
                </ol>
            </div>
            <div className="menu">
                <button onClick={startQuiz}>
                    Start Quiz
                </button>
            </div>
        </>
    );
}
