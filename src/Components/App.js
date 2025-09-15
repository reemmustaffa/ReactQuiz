import { createContext, useContext, useEffect, useReducer } from "react";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinshScreen from "./FinshScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuiz } from "./QuizContext";

export default function App() {
  const { status } = useQuiz();
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />

              <NextButton />
            </Footer>
          </>
        )}
        {status === "finsh" && <FinshScreen />}
      </Main>
    </div>
  );
}
