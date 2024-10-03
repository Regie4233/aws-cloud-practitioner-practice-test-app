import { UserQuestionInput } from "./types";

export function createAlphabetIndex(index: number) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[index];
}

export function getFinalScore(item: UserQuestionInput) {
  if (item.selectedAnswer?.length === 0 || item.selectedAnswer === undefined) return;
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