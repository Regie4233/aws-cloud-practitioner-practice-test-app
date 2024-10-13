'use client'
import { useAppSelector } from "@/lib/hooks";
import { QUESTION } from "@/lib/types";
import { Suspense, useEffect, useState } from "react";
import Exam from "./Exam";

import { useDispatch } from "react-redux";
import { getAllQuestionData } from "@/lib/state/questions/questionSlice";
import LoadingState from "./LoadingState";
function Questionnaire({ questionList }:{questionList: QUESTION[]}) {
  const countdata = useAppSelector((state) => state.questionData.items);
  const [cardindex, setCardIndex] = useState(0);
  const dispatch = useDispatch()
  
  function handleValueChange(newValue: number) {
    const minValue = 0; 
    const maxValue = 49;

    const clampedValue = Math.max(minValue, Math.min(maxValue, newValue));
   
    setCardIndex(clampedValue);
  }

  useEffect(() => {
    dispatch(getAllQuestionData(questionList))
  }, [])

  // if (!countdata) { return; }
  return (

    <main className="md:w-1/2 m-auto flex flex-col h-screen">
      <section className="p-12">
        <h2 className="text-center font-semibold text-2xl">
          Free AWS Cloud Practitioner Practice Exam
        </h2>
      </section>
      <main className="flex flex-col justify-between">
        <Suspense fallback={<LoadingState />}>
        <Exam countdata={countdata} cardindex={cardindex} setCardIndex={setCardIndex} handleValueChange={handleValueChange} />
        </Suspense>
      </main>


    </main>
  )
}

export default Questionnaire

