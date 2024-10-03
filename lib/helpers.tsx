import { useDispatch } from "react-redux";
import { UserQuestionInput } from "./types";
import { changeAnswer } from "./state/questions/questionSlice";

export function createAlphabetIndex(index: number) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[index];
}

export function getFinalScore(item: UserQuestionInput) {
  const dispatch = useDispatch();

  

  if (item.selectedAnswer?.length === 0) return;
  console.log(item.selectedAnswer[0].toUpperCase())
  if (item.question.correctAnswer.length > 1) {
    if (item.question.correctAnswer.includes(item.selectedAnswer[0].toUpperCase()) && item.question.correctAnswer.includes(item.selectedAnswer[1].toUpperCase())) {
      return true;
    } else {
      return false;
    }
  } else {
    if (item.question.correctAnswer.includes(item.selectedAnswer[0].toUpperCase())) {
      return true;
    } else {
      return false;
    }
  }

}