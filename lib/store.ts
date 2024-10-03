import { configureStore } from '@reduxjs/toolkit'
import questionReducer from './state/questions/questionSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      questionData: questionReducer,
      getQuestionData: questionReducer,
      resetQuestions: questionReducer
    },
  })
}


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']