import { iteration } from "../iteration";

function insertionSortStep(inputArray: number[], currentDepth: number): IterationStepResult<number[]> {
  if (inputArray.length === 0) return ({isDone: true, result: inputArray});
  const isDone = currentDepth >= inputArray.length - 1;
  const result = [...inputArray];

  const toInsert = result.splice(result.length - 1, 1)[0];

  for (let i = 0; i <= currentDepth; i++) {
    if (i === currentDepth || toInsert < result[i]) {
      result.splice(i, 0, toInsert);
      break;
    }
  }
  
  const iterationStepResult: IterationStepResult<number[]> = {isDone, result};
  return iterationStepResult;
}

export const insertionSort = iteration(insertionSortStep);