function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="btn btn-ui"
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        onClick={() => dispatch({ type: "finsh" })}
        className="btn btn-ui"
      >
        finsh
      </button>
    );
}

export default NextButton;
