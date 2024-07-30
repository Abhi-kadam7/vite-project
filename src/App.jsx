import './App.css';
import React, { useState } from "react";
import MainMenu from "./component/MainMenu";
import Quiz from "./component/Quiz";
import EndScreen from "./component/EndScreen";
import { QuizContext } from "./Helpers/Contexts";

function App() {
   const [gameState, setGameState] = useState("menu");
   const [score, setScore] = useState(0);
   const [questions, setQuestions] = useState([]);

   return (
      <div className="App">
         <div className='App2'><h1>Quiz-Application</h1></div>
         <QuizContext.Provider value={{ gameState, setGameState, score, setScore, questions, setQuestions }}>
            {gameState === "menu" && <MainMenu />}
            {gameState === "quiz" && <Quiz />}
            {gameState === "endScreen" && <EndScreen />}
         </QuizContext.Provider>
      </div>
   );
}

export default App;
