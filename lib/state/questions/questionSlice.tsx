import { QUESTION, UserQuestionInput } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: Array<UserQuestionInput> = [];

const questionSlice = createSlice({
  name: 'questiondata',
  initialState,
  reducers: {
    questionData: (state, action: PayloadAction<QUESTION[]>) => {
      if(state.length > 0) return;
      action.payload.forEach((element, i) => {
          state.push({
            question: element,
            selectedAnswer: [''],
            index: i
          })
      });
    },
    changeAnswer: (state, action: PayloadAction<UserQuestionInput>) => {
      console.log(action.payload);
      state[action.payload.index].selectedAnswer = action.payload.selectedAnswer;
      console.log(state)
    }
  }
});

export const { questionData, changeAnswer } = questionSlice.actions;
export default questionSlice.reducer;