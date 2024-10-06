
import Link from 'next/link'
import QuestionCard from './QuestionCard'
import { UserQuestionInput } from '@/lib/types'
import { useDispatch } from 'react-redux'
import { getScore, resetQuestions } from '@/lib/state/questions/questionSlice';
import { checkAnswer } from '@/lib/helpers';
import { useHandleResult } from '@/lib/fetchhooks';
import Results from './Results';

function Exam({ countdata, cardindex, setCardIndex, handleValueChange }: { countdata: UserQuestionInput[], cardindex: number, setCardIndex: (index: number) => void, handleValueChange: (newValue: number) => void }) {
    const dispatch = useDispatch();
    const { setState } = useHandleResult();

    const getAnwserResults = () => {
        countdata.forEach(element => {
            if (checkAnswer(element)) {
                setState(true, element);
            } else {
                setState(false, element);
            }
        });
        dispatch(getScore());
    }

    const hasAnswer = (item: UserQuestionInput) => {
        if (item.selectedAnswer === undefined) return;
        if (item.selectedAnswer.length <= 0) return false;
        return true
    }
    const hasResult = (item: UserQuestionInput) => {
        if (item.selectedAnswer === undefined) return;
        if (item.isCorrect) return true;
        return false;
    }
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
                        <button className="hover:scale-105 transition-transform" onClick={() => (getAnwserResults())}>Submit Answers</button>
                }

            </section>
            {/* Questions Nav */}
            <section className="border-2 p-2 flex flex-col justify-center">
                <ul className="grid grid-cols-12 text-center">
                    {
                        countdata.map((e, i) => {
                            if (e.selectedAnswer !== undefined)
                                return (
                                    <li key={i} className={`${cardindex === i ? 'bg-green- border-2 border-dashed rounded-none border-gray-900' : 'cursor-pointer hover:underline'}`}
                                        style={
                                            e.isCorrect === undefined ?
                                                hasAnswer(e) ? { background: '#60a5fa' } : {}
                                                :
                                                hasResult(e) ? { background: '#4ade80' } : { background: '#f87171' }
                                        }
                                        onClick={() => setCardIndex(i)}
                                    >
                                        {e.index + 1}
                                    </li>
                                )
                        })
                    }
                </ul>
                <Link href='/' className='self-center' onClick={() => dispatch(resetQuestions())}>Reset Exam</Link>
                <Results />
            </section>
        </>
    )
}

export default Exam