'use client'
import { useAppSelector } from "@/lib/hooks";

import { QUESTION } from "@/lib/types";
import { useState } from "react";


import Exam from "./Exam";
import Results from "./Results";
import { useSearchParams } from "next/navigation";
import ExamHome from "./ExamHome";
function Questionnaire({ questionList }:{questionList: QUESTION[]}) {
  const countdata = useAppSelector((state) => state.questionData);
  const [cardindex, setCardIndex] = useState(0);

  
  const searchParams = useSearchParams();


  function handleValueChange(newValue: number) {
    const minValue = 0; 
    const maxValue = 49;

    const clampedValue = Math.max(minValue, Math.min(maxValue, newValue));
   
    setCardIndex(clampedValue);
  }

  if (!countdata) { return; }
  return (

    <main className="md:w-1/2 m-auto flex flex-col h-screen">
      <section className="p-12">
        <h2 className="text-center font-semibold text-2xl">
          Free AWS Cloud Practitioner Practice Exam
        </h2>
      </section>
      <main className="flex flex-col justify-between">
        {
           searchParams.get('page') === 'home' ?
            <ExamHome questionList={questionList}/>
            :
            searchParams.get('page') === 'exam' ?
              <Exam countdata={countdata} cardindex={cardindex} setCardIndex={setCardIndex} handleValueChange={handleValueChange} />
              :
              searchParams.get('page') === 'result' ?
                <Results data={countdata} />
                :
                null
        }
      </main>


    </main>
  )
}

export default Questionnaire

