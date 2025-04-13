import { FaCheckCircle } from "react-icons/fa";
import { useStoreQuiz } from "../store/useStoreQuiz";

const Sidebar = () => {
  const { question, currentQuestion } = useStoreQuiz();
  return (
    <div className="w-1/3 border h-screen border-gray-300 bg-gray-200">
      <h2>Question</h2>
      <ul className="flex flex-col  gap-2">
        {question.map((_, index) => (
          <li key={index} className="flex items-center  gap-2">
            <FaCheckCircle
              className={`mr-2 ${
                index <= currentQuestion ? "text-green-500" : "text-gray-500"
              }`}
            />
            <span>Question{index + 1}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
