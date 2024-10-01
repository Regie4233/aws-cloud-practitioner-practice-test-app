'use client'
import { UserQuestionInput } from '@/lib/types'
import { Checkbox } from '../ui/checkbox'
import { createAlphabetIndex } from '@/lib/helpers'
import { useHandleChangeAnswer } from '@/lib/fetchhooks'
import { useRef, useState } from 'react'

function MultipleSelect({ data }: { data: UserQuestionInput }) {
    const { updateState } = useHandleChangeAnswer();
    const [selectedAns, setSelectedAns]  = useState<string[]>([]);
    const selectedAnsRef = useRef<string[]>([]);
  
    const checkSelections = (answers: string) => {
        setSelectedAns(current => [...current, answers])
        selectedAnsRef.current = [...selectedAnsRef.current, answers];
        console.log(selectedAnsRef.current)
        updateState(selectedAnsRef.current, data)

    }

    const uncheckSelection = (answers: string) => {
        const newList = selectedAns.filter(ans => ans !== answers);
        setSelectedAns(newList)
        selectedAnsRef.current = newList
        console.log(selectedAnsRef.current)
        updateState(selectedAnsRef.current, data)
    }

    return (
        <div>
            {
                data.question.options.map((e, i) => (
                    <div key={i} className="flex items-center space-x-2">
                        <Checkbox id={e} value={createAlphabetIndex(i)} onCheckedChange={(checked) => {
                            return checked ?
                                checkSelections(createAlphabetIndex(i))
                                :
                                uncheckSelection(createAlphabetIndex(i))
                        }} />
                        <label
                            htmlFor={e}
                            className=""
                        >
                            {e}
                        </label>
                    </div>
                ))
            }


        </div>
    )
}

export default MultipleSelect

