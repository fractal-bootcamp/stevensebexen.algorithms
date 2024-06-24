import e from "express";
import { iteration } from "../iteration";

function selectionSortStep(inputArray: number[], currentDepth: number): IterationStepResult<number[]> {
  const result = [...inputArray];
  const isDone = currentDepth >= result.length - 2;

  let currentMin = result[currentDepth];
  let currentMinIndex = null;

  for (let i = currentDepth + 1; i < result.length; i++) {
    if (result[i] < currentMin) {
      currentMin = result[i];
      currentMinIndex = i;
    }
  }

  if (currentMinIndex) {
    [result[currentDepth], result[currentMinIndex]] = [result[currentMinIndex], result[currentDepth]];
  }

  const iterationStepResult: IterationStepResult<number[]> = {isDone, result};
  return iterationStepResult;
}

export const selectionSort = iteration(selectionSortStep);