import { useQuiz } from "./QuizContext";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuiz();
  let question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
