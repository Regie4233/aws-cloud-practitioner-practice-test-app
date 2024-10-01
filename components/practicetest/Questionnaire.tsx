'use client'
import { useAppSelector } from "@/lib/hooks";
import { changeAnswer, questionData } from "@/lib/state/questions/questionSlice";
import { QUESTION, UserQuestionInput } from "@/lib/types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import QuestionCard from "./QuestionCard";
function Questionnaire({ questionItems }: { questionItems: Array<QUESTION> }) {
  const countdata = useAppSelector((state) => state.questionData);
  const [cardindex, setCardIndex] = useState(0);
  console.log(countdata)
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(questionData(questionItems));
  }, [dispatch, questionItems])


  return (
    <main className="w-1/2">
      <QuestionCard data={countdata[0]}/>
      <section className="flex justify-between p-2">
        <button>Prevous</button>
        <button>Next</button>
      </section>
    </main>
  )
}

export default Questionnaire