import { iteration } from "../iteration";

function splitArray(inputArrays: Array<number[]>, numSplits: number): Array<number[]> {
  if (numSplits <= 0) return inputArrays;
  const splits: Array<number[]> = [];
  for (let i = 0; i < inputArrays.length; i++) {
    const middle = Math.ceil(inputArrays[i].length / 2);
    splits.push(inputArrays[i].slice(0, middle), inputArrays[i].slice(middle));
  }
  return splitArray(splits, numSplits - 1);
}

// Perform a single merge and flatten the array.
function mergeOnce(inputArray: Array<number[]>): number[] {
  console.log('INPUT', inputArray);
  const splits: Array<number[]> = [];
  for (let i = 0; i < inputArray.length; i++) {
    const mergedSplit: number[] = [];
    let m = 0;
    let n = 0;
    const arr0 = inputArray[i];
    const arr1 = inputArray[i+1];
    while (m < arr0.length || n < arr1.length) {
      console.log(m, n);
      const x = arr0[m];
      const y = arr1[n];
      if ((!y || x < y) && x) {
        mergedSplit.push(x);
        m += 1;
      } else if ((!x || y < x) && y) {
        mergedSplit.push(y);
        n += 1;
      }
    }
    console.log('X', mergedSplit)
    splits.push(mergedSplit);
  }
  return splits.flat();
}

// At depth n, split the list m - n times, where m is the max number of splits.
function mergeSortStep(inputArray: number[], currentDepth: number): IterationStepResult<number[]> {
  const numSplits = Math.ceil(Math.log2(inputArray.length)) - currentDepth;
  const isDone = numSplits <= 1;

  const splits = splitArray([inputArray], numSplits);  
  const result = mergeOnce(splits);

  console.log('splits', splits.join(', '));
  console.log('result', result.join(', '));

  const iterationStepResult: IterationStepResult<number[]> = ({isDone, result});
  return iterationStepResult;
}

export const mergeSort = iteration(mergeSortStep);