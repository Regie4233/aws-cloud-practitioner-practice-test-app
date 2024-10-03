import { useChangeView } from '@/lib/clienthooks';
import { getFinalScore } from '@/lib/helpers'
import { UserQuestionInput } from '@/lib/types'

function Results({ data }: { data: UserQuestionInput[] }) {
  const {handleSearch} = useChangeView();
  let correctCount: number = 0;

  data.forEach(element => {
    if (getFinalScore(element)) {
      correctCount += 1;
    }
  });
  return (
    <>
      <section className="border-2 p-2 flex flex-col justify-between gap-5">
        <section className='flex flex-col items-center justify-center'>
          <p className='text-3xl flex gap-4'>Your Score is: </p>
          <p className='text-4xl font-semibold'>{correctCount / 50 * 100}%</p>
          <p className='text-lg'>{`(${correctCount}/50)`}</p>
        </section>
        <button onClick={() => handleSearch('home')}
        className='hover:opacity-90 flex flex-col items-center border w-fit m-auto p-2 bg-sky-600 text-white'>
          Re-Take Test
          <span className='text-sm'>Generate new Questions</span>
        </button>
        <ul>
          {
            data.map((e, idx) => {
              return (
                <li key={idx} className='border-b-2 p-2 '>
                  <h6><span className='font-bold'>{e.index + 1}.</span> {e.question.prompt}</h6>
                  {
                    getFinalScore(e) ?
                     <p className='bg-green-300 text-center capitalize font-semibold'>{e.selectedAnswer}</p>
                      :
                      <div className='flex gap-2 justify-center items-center bg-red-200'>
                        <p className='font-bold capitalize text-red-900'>
                         {e.selectedAnswer}
                        </p>
                       
                        <p className='flex gap-2 bg-green-200 w-fit p-1'>
                        <span >Correct Answer:</span>
                          {
                            e.question.correctAnswer.map((correctAns, i) => (
                              <span key={i} className='font-semibold '>{correctAns}</span>
                            ))
                          }
                        </p>
                      </div>
                  }
                </li>
              )
            })
          }
        </ul>
      </section>
    </>
  )
}

export default Results