import Questionnaire from "@/components/practicetest/Questionnaire";
import { useFetchQuestionsData } from "@/lib/fetchhooks";


export default async function Home() {

  const dat = await useFetchQuestionsData()
  
  return (
    <div className="">
     <Questionnaire questionItems={dat}/>
    </div>
  );
}
