import { UserQuestionInput } from "./types";

export function createAlphabetIndex(index: number) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[index];
}

export function getFinalScore(item: UserQuestionInput) {
  // let correctAnswer: Array<number> = [];
  
    if(item.selectedAnswer === undefined) return;
    if (item.question.correctAnswer.length > 1) {
      if (item.question.correctAnswer.includes(item.selectedAnswer[0]) && item.question.correctAnswer.includes(item.selectedAnswer[1])){
        return true;
      }else{
        return false;
      }
    }else{
      if (item.question.correctAnswer.includes(item.selectedAnswer[0])){
        return true;
      }else{
        return false;
      }
    }
    
}