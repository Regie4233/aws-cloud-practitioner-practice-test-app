import { useChangeView } from "@/lib/clienthooks"
import { QUESTION } from "@/lib/types";
import { useDispatch } from "react-redux";
import { getAllQuestionData, resetQuestions } from "@/lib/state/questions/questionSlice";
function ExamHome({ questionList }:{questionList: QUESTION[]}) {
  const {handleSearch} = useChangeView()
  const dispatch = useDispatch();
  return (
    <>
      <div className='text-lg border-2 p-8'>
        <h3>Questions in this exam are verfied and maintained according to <a target='_blank' className='text-blue-700 underline' href='https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes/tree/master/practice-exam'>this repo</a>. Begining the exam, generates 50 randomized questions.</h3>
        <br />
        <p>Use this app as much as you&apos;d like to prepare you for AWS Cloud Certification. I will try to keep the questions up to date. I Wish you all the best in your journey!</p>
      </div>
      <button className='mx-auto my-8 p-8 bg-orange-200 w-fit text-lg font-semibold shadow-lg' onClick={() => (handleSearch('exam'), dispatch(resetQuestions()), dispatch(getAllQuestionData(questionList)))}>Start the Practice Exam</button>
    </>
  )
}

export default ExamHome