'use client'
import { UserQuestionInput } from '@/lib/types'
import { Checkbox } from '../ui/checkbox'
import { createAlphabetIndex } from '@/lib/helpers'
import { useHandleChangeAnswer } from '@/lib/fetchhooks'

function MultipleSelect({ data }: { data: UserQuestionInput }) {
    const { updateState } = useHandleChangeAnswer();
  
    const checkSelections = (answers: string) => {
        const newlist = [...data.selectedAnswer!, answers];
        console.log(newlist)
        updateState(newlist, data);
    }

    const uncheckSelection = (answers: string) => {
          const newlist = data.selectedAnswer?.filter(ans => ans !== answers);
        console.log(newlist);
        if(newlist === undefined) return;
        updateState(newlist, data);
    }

  
    return (
        <div>
            {
                data.question.options.map((e, i) => (
                    <div key={i} className="flex items-center space-x-2">
                        <Checkbox id={createAlphabetIndex(i)} checked={data.selectedAnswer!.includes(createAlphabetIndex(i))} value={createAlphabetIndex(i)} onCheckedChange={(checked) => {
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

