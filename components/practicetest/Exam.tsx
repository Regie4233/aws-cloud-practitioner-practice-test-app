import QuestionCard from './QuestionCard'
import { UserQuestionInput } from '@/lib/types'
import { useDispatch } from "react-redux";
import { changeView } from '@/lib/state/views/viewSlice';

function Exam({ countdata, cardindex, setCardIndex, handleValueChange }: { countdata: UserQuestionInput[], cardindex: number, setCardIndex: (index: number) => void, handleValueChange: (newValue: number) => void }) {
    const dispatch = useDispatch();
    return (
        <>
            <section className="border-x-2 border-t-2 p-8 flex flex-col justify-between gap-5 h-[50vh]">
                <QuestionCard data={countdata[cardindex]} />

                {/* button nav */}
            </section>
            <section className="flex justify-between p-8 border-x-2 text-lg underline">
                <button className="hover:scale-105 transition-transform" onClick={() => handleValueChange(cardindex - 1)}>Prevous</button>
                {
                    cardindex !== 49 ?
                        <button className="hover:scale-105 transition-transform" onClick={() => handleValueChange(cardindex + 1)}>Next</button>
                        :
                        <button className="hover:scale-105 transition-transform" onClick={() => dispatch(changeView('result'))}>Submit Answers</button>
                }

            </section>
            {/* Sidebar */}
            <section className="border-2 p-2">
                <ul className="grid grid-cols-12 text-center">
                    {
                        countdata.map((e, i) => {
                            if (e.selectedAnswer !== undefined)
                                return (
                                    <li key={i} className={`${cardindex === i ? 'border-2 border-dashed rounded-none border-gray-900' : 'cursor-pointer hover:underline'} ${e.selectedAnswer.length > 0 ? 'bg-green-600 border-2 rounded-full' : ''}`}
                                        onClick={() => setCardIndex(i)}
                                    >
                                        {e.index + 1}
                                    </li>
                                )
                        })
                    }
                </ul>
            </section>
        </>
    )
}

export default Exam