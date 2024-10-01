import Questionnaire from "@/components/practicetest/Questionnaire";
import { useFetchQuestionsData } from "@/lib/fetchhooks";


export default async function Home() {

  const dat = await useFetchQuestionsData()
  
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      Aws Cloud Practitioner Practice Test
     <Questionnaire questionItems={dat}/>
    </div>
  );
}
