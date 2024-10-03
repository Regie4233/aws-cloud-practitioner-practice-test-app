import { configureStore } from '@reduxjs/toolkit'
import questionReducer from './state/questions/questionSlice'
import viewReducer from './state/views/viewSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      questionData: questionReducer,
      viewController: viewReducer
    },
  })
}


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']