'use client'
import { UserQuestionInput } from "@/lib/types";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import MultipleSelect from "./MultipleSelect";
import { createAlphabetIndex } from "@/lib/helpers";
import { useHandleChangeAnswer } from "@/lib/fetchhooks";

function QuestionCard({ data }: { data: UserQuestionInput }) {
    const { updateState } = useHandleChangeAnswer();
    // const dispatch = useDispatch();
    // const handleChangeAnswer = ( answer :  string ) => {
    //     const answeredData: UserQuestionInput = {
    //         question: data.question,
    //         selectedAnswer: [answer],
    //         index: data.index
    //     }
    //     dispatch(changeAnswer(answeredData))
    // }
    if (!data) return;
    return (
        <section className="border-2 p-8">
            <h4 className="font-medium text-xl">
                {
                    data.question.prompt
                }
            </h4>
            {
                data.question.correctAnswer.length > 1 ?
                    <MultipleSelect data={data} />
                    :
                    <RadioGroup onValueChange={(val) => updateState([val], data)}>
                        {
                            data.question.options.map((e, i) => (
                                <div key={i} className="flex items-center space-x-2">
                                    <RadioGroupItem value={createAlphabetIndex(i)} id={`r${i}`} />
                                    <Label htmlFor={`r${i}`}>{e}</Label>
                                </div>
                            ))
                        }
                    </RadioGroup>
            }
        </section>
    )
}

export default QuestionCard