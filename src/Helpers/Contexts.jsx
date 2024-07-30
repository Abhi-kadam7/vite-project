import React, { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [gameState, setGameState] = useState("menu");
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);

    return (
        <QuizContext.Provider value={{ gameState, setGameState, score, setScore, questions, setQuestions }}>
            {children}
        </QuizContext.Provider>
    );
};
