'use client'
import { UserQuestionInput } from "@/lib/types";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import MultipleSelect from "./MultipleSelect";
import { createAlphabetIndex, getCorrection } from "@/lib/helpers";
import { useHandleChangeAnswer } from "@/lib/fetchhooks";
import { useAppSelector } from "@/lib/hooks";

function QuestionCard({ data }: { data: UserQuestionInput }) {
    const { updateState } = useHandleChangeAnswer();
    const score = useAppSelector((state) => state.questionData.score);
    if (!data) return;
    return (
        <>
            <h6>Question {data.index + 1}</h6>
            <h4 className="font-medium md:text-xl">
                {
                    data.question.prompt
                }
            </h4>
            {
                data.question.correctAnswer.length > 1 ?
                    <MultipleSelect data={data} disabled={data.isCorrect !== undefined ? true : false}/>
                    :
                    <RadioGroup
                        disabled={data.isCorrect !== undefined ? true : false}
                        value={
                            data.selectedAnswer!.length > 0 ? 
                            data.selectedAnswer![0] : ''
                        }
                        onValueChange={(val) => updateState([val], data)}>
                        {
                            data.question.options.map((e, i) => (
                                <div key={i} className='flex items-center space-x-2 border-b-2 p-1 gap-1'
                                
                                // Show Red on correct answer on submit results
                                style={
                                    (getCorrection(data, createAlphabetIndex(i).toUpperCase()) && score > -1
                                    ? {backgroundColor: '#fca5a5'} : {})}>

                                    <RadioGroupItem value={createAlphabetIndex(i)} id={`r${i}`} />
                                    <Label htmlFor={`r${i}`}>{e}</Label>
                                </div>
                            ))
                        }
                    </RadioGroup>
            }
        </>
    )
}

export default QuestionCard
