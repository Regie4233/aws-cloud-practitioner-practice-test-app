import { QUESTION, UserQuestionInput } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: Array<UserQuestionInput> = [];

const questionSlice = createSlice({
  name: 'questiondata',
  initialState,
  reducers: {
    questionData: (state, action: PayloadAction<QUESTION[]>) => {
      if (state.length > 0) return;
      action.payload.forEach((element, i) => {
        state.push({
          question: element,
          selectedAnswer: [],
          index: i
        })
      });
    },
    getAllQuestionData: (state, action: PayloadAction<QUESTION[]>) => {
      const questionnaire: Array<QUESTION> = [];

      for (let yy = 0; yy < 50; yy++) {
        for (let index = 0; index < action.payload.length; index++) {
          const randIndex = Math.floor(Math.random() * 150);
          const targetitem: QUESTION = action.payload[randIndex];
          if (!questionnaire.includes(targetitem)) {
            questionnaire.push(targetitem)
            break;
          }
        }
      }
    
      questionnaire.forEach((element, i) => {
        state.push({
          question: element,
          selectedAnswer: [],
          index: i
        })
      });
    },
    changeAnswer: (state, action: PayloadAction<UserQuestionInput>) => {

      state[action.payload.index].selectedAnswer = action.payload.selectedAnswer;
    
    },
    resetQuestions: (state) => {
      state.length = 0;
    }

  }
});

export const { questionData, changeAnswer, getAllQuestionData, resetQuestions } = questionSlice.actions;
export default questionSlice.reducer;