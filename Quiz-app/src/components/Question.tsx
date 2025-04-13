import { useStoreQuiz } from "../store/useStoreQuiz";

const Question = () => {
  const {
    question,
    answers,
    nextQuestion,
    prevQuestion,
    showScore,
    score,
    currentQuestion,
    resetQuestion,
    selectAnswer,
  } = useStoreQuiz();

  if (showScore) {
    return (
      <div className="w-3/4 p-6 flex flex-col items-center gap-1">
        <h2>Your Score</h2>
        <span>
          Scored By {score} out of {question.length}
        </span>
        <button
          type="button"
          onClick={resetQuestion}
          className="px-4 py-2 rounded-lg bg-red-500 text-white mt-5"
        >
          Reset
        </button>
      </div>
    );
  }

  const questionValue = question[currentQuestion];
  const currentAnswer = answers[currentQuestion];

  const handleSelect = (index: any) => {
    selectAnswer(index);
  };

  const handleSubmit = () => nextQuestion();

  return (
    <div className="w-3/4 p-6 ">
      <h2>{questionValue.question}</h2>
      <div className="mt-6">
        {questionValue.options.map((option, index) => (
          <div className="flex items-center">
            <label className="m-1">
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                checked={currentAnswer === index}
                onChange={() => handleSelect(index)}
                className="mr-2"
              />
              {option}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between">
        {currentQuestion > 0 && (
          <button
            type="button"
            onClick={prevQuestion}
            className="px-4 py-2 rounded-lg bg-green-500"
          >
            Previous
          </button>
        )}
        {currentQuestion < question.length - 1 ? (
          <button
            type="button"
            onClick={nextQuestion}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white"
          >
            Next Question
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-gray-700 text-white"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};
export default Question;
