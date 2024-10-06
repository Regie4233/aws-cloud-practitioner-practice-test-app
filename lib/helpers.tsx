import { QUESTION, UserQuestionInput } from "./types";

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

export function checkDuplicate(array1: QUESTION[], array2:QUESTION[]) {
  // Create a set to store unique combinations of key-value pairs from array1
  const keyValueSets = new Set();

  // Iterate through array1 and add key-value pairs to the set
  array1.forEach((obj) => {
    keyValueSets.add(`prompt:${obj.prompt}`);
  });

  // Iterate through array2 and check if any key-value pair exists in the set
  return array2.some((obj) => keyValueSets.has(`prompt:${obj.prompt}`));
}