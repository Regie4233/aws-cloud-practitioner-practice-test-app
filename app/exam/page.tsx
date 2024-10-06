import Questionnaire from "@/components/practicetest/Questionnaire";
import { useFetchQuestionsData } from "@/lib/fetchhooks";

export default async function ExamPage() {
  const dat = await useFetchQuestionsData();
  return (
    <div>
        <Questionnaire questionList={dat}/>
    </div>
  )
}
