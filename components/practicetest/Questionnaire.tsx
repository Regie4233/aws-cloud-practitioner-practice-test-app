'use client'
import { useAppSelector } from "@/lib/hooks";
import { questionData } from "@/lib/state/questions/questionSlice";
import { QUESTION } from "@/lib/types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Exam from "./Exam";
function Questionnaire({ questionItems }: { questionItems: Array<QUESTION> }) {
  const countdata = useAppSelector((state) => state.questionData);
  const [cardindex, setCardIndex] = useState(0);
  const [view, setView] = useState('exam');
  console.log(countdata)
  const dispatch = useDispatch();

  function handleValueChange(newValue: number) {
    const minValue = 0; // Replace with your desired minimum value
    const maxValue = 49; // Replace with your desired maximum value

    const clampedValue = Math.max(minValue, Math.min(maxValue, newValue));
    console.log(clampedValue)
    setCardIndex(clampedValue);
  }


  useEffect(() => {
    //initiallize data - "questions"
    dispatch(questionData(questionItems));
  }, [dispatch, questionItems])
  useEffect(() => {
    console.log(cardindex)
  }, [cardindex])

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
          view === 'home' ?
            null
            :
            view === 'exam' ?
              <Exam countdata={countdata} cardindex={cardindex} setCardIndex={setCardIndex} handleValueChange={handleValueChange} />
              :
              null
        }
      </main>


    </main>
  )
}

export default Questionnaire

