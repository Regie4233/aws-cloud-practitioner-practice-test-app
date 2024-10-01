import { UserQuestionInput } from '@/lib/types'
import { Checkbox } from '../ui/checkbox'

function MultipleSelect({ data }: { data: UserQuestionInput }) {
    return (
        <div>
            {
                data.question.options.map((e, i) => (
                    <div key={i} className="flex items-center space-x-2">
                        <Checkbox id={e} />
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

