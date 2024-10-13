'use client'
import { useAppSelector } from "@/lib/hooks"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader
} from "@/components/ui/dialog"
import { getPercentile } from "@/lib/helpers";

function Results() {
  // const dispatch = useDispatch();
  const data = useAppSelector((state) => state.questionData);

  return (
    <div>
      {
        data.score > -1 && (
          <>
            <Dialog defaultOpen={true}>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription className="flex flex-col items-center">
                    <h3 className="text-2xl">Your Test Score</h3>
                    <h6 className="text-3xl font-semibold text-black"
                      style={getPercentile(data.score, data.items.length) >= 70 ? { color: '#22c55e' } : { color: '#ef4444' }}>
                      {getPercentile(data.score, data.items.length)}%
                    </h6>
                    <p className="text-xl font-medium">{data.score} out of {data.items.length} correct</p>
                    <p className="text-xl"
                      style={getPercentile(data.score, data.items.length) >= 70 ? { color: '#22c55e' } : { color: '#ef4444' }}>
                      {
                        getPercentile(data.score, data.items.length) >= 70 ? 'Passed' : 'Not Passed'
                      }
                    </p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <p>Your Score is: {data.score}</p>
            <p>{data.score} out of {data.items.length} correct</p>
          </>

        )
      }
    </div>
  )
}

export default Results