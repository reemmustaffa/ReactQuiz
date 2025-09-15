function Options({ question, dispatch, answer }) {
  // دا عشان اتأكد لو في اجابه اخليه معتش يخار تاني ويغير فيها وكمان عشان اول لما افتح ميحطتش الكلاسس ع طول علي الاختيارات
  const handleAnswer = answer !== null;
  // classname answer :عشان اخليها تبقي داخله لجوا الاجابه اللي هخترها سواء صح او غلط

  //classnme=coorect&wrong:دول عشان لو اخترت صح الون بلون الازرق ولو غلط الون بلون الاورنج
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option  ${i === answer ? "answer" : ""} ${
            handleAnswer
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={handleAnswer}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
