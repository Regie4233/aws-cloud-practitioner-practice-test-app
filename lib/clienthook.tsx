'use client'
import { useOptimistic, useState } from 'react';

export const useCheckSelections = () => {
    const [selectedAns, setSelectedAns]  = useState<string[]>([]);
    let answers: string = '';
    useOptimistic((prevSelectedAns: string[]) => {
      const updatedSelectedAns = [...prevSelectedAns, answers];
      setSelectedAns(updatedSelectedAns);
      console.log(updatedSelectedAns); // This will log the updated array immediately
    //   updateState(updatedSelectedAns, data);
      return updatedSelectedAns;
    })
  
    const updateAnswers = (newAns : string) => {
        answers = newAns
        console.log(selectedAns)
    }
    return {updateAnswers}
}