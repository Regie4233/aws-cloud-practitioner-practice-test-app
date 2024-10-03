
export interface QUESTION {
    id?: number,
    prompt: string,
    options: Array<string>,
    correctAnswer:Array<string>
}

export interface UserQuestionInput {
    question: QUESTION,
    selectedAnswer?: Array<string>,
    index: number
}
