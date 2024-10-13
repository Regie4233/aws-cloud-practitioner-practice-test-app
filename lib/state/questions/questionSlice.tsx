
import { QUESTION, UserQuestionInput } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateValue {
  items: Array<UserQuestionInput>,
  score: number
}

// const initialState: Array<UserQuestionInput> = []
const initialState: StateValue = {
  items: [],
  score: -1
}
const questionSlice = createSlice({
  name: 'questiondata',
  initialState,
  reducers: {
    questionData: (state, action: PayloadAction<QUESTION[]>) => {
      console.log("!!!!!!!!!")
      // not being used? <><><><
      if (state.items.length > 0) return;

      action.payload.forEach((element, i) => {
        state.items.push({
          question: element,
          selectedAnswer: [],
          index: i
        })
      });
    },
    getAllQuestionData: (state, action: PayloadAction<QUESTION[]>) => {
      if (state.items.length > 0) return;
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
        if (state.items.some((object) => object.question.prompt === element.prompt)) return;
        state.items.push({
          question: element,
          selectedAnswer: [],
          index: i
        })
      });

    },
    changeAnswer: (state, action: PayloadAction<UserQuestionInput>) => {
      state.items[action.payload.index].selectedAnswer = action.payload.selectedAnswer;
    },
    setQuestionState: (state, action: PayloadAction<UserQuestionInput>) => {
      state.items[action.payload.index] = action.payload;
    },
    resetQuestions: (state) => {
      state.items.length = 0;
      state.score = -1;
    },
    getScore: (state) => {
      state.score = 0;
      state.items.forEach(element => {
        if (element.isCorrect) {
          state.score++;
        }
      });
    }

  }
});

export const { questionData, changeAnswer, getAllQuestionData, resetQuestions, setQuestionState, getScore } = questionSlice.actions;
export default questionSlice.reducer;