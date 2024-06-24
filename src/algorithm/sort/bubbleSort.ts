import { iteration } from "../iteration"

function bubbleSortStep(inputArray: number[]): IterationStepResult<number[]> {
  const result = [...inputArray];
  let didSwap = false;
  
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] > inputArray[i+1]) {
      didSwap = true;
      [result[i], result[i+1]] = [result[i+1], result[i]];
    }
  }
  
  const isDone = !didSwap;
  
  const iterationStepResult: IterationStepResult<number[]> = { isDone, result };
  return iterationStepResult;
}

export const bubbleSort = iteration(bubbleSortStep);