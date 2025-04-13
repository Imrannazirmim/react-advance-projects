import Question from "./Question"
import Sidebar from "./Sidebar"

const QuizLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar/>
      <div className="flex-1 flex flex-col justify-center items-center">
          <Question/>
      </div>
    </div>
  )
}
export default QuizLayout