'use client'
import { UserQuestionInput } from '@/lib/types'
import { Checkbox } from '../ui/checkbox'
import { createAlphabetIndex, getCorrection } from '@/lib/helpers'
import { useHandleChangeAnswer } from '@/lib/fetchhooks'
import { useAppSelector } from '@/lib/hooks'

function MultipleSelect({ data, disabled }: { data: UserQuestionInput, disabled: boolean }) {
    const { updateState } = useHandleChangeAnswer();
    const score = useAppSelector(state => state.questionData.score)
    const checkSelections = (answers: string) => {
        const newlist = [...data.selectedAnswer!, answers];
      
        updateState(newlist, data);
    }

    const uncheckSelection = (answers: string) => {
          const newlist = data.selectedAnswer?.filter(ans => ans !== answers);
      
        if(newlist === undefined) return;
        updateState(newlist, data);
    }

  
    return (
        <div>
            {
                data.question.options.map((e, i) => (
                    <div key={i} className="flex items-center space-x-2 border-b-2 p-1 gap-1"
                    style={
                        score === -1 ? {} : (getCorrection(data, createAlphabetIndex(i).toUpperCase())
                        ? {backgroundColor: '#fca5a5'} : {})}
                        >
                        <Checkbox 
                        disabled={disabled}
                        id={createAlphabetIndex(i)} checked={data.selectedAnswer!.includes(createAlphabetIndex(i))} value={createAlphabetIndex(i)} onCheckedChange={(checked) => {
                            return checked ?
                                checkSelections(createAlphabetIndex(i))
                                :
                                uncheckSelection(createAlphabetIndex(i))
                        }} />
                        <label
                            htmlFor={createAlphabetIndex(i)}
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

