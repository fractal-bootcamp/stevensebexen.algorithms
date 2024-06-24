export function iterateUntilDone<T>(fn: (x: T) => IterationStepResult<T>, inputValue: T, steps: IterationSteps<T> = [], depth = 10000): IterationSteps<T> {
  if (depth <= 0) throw new Error('Recursion depth max reached.');

  const stepResult: IterationStepResult<T> = fn(inputValue);
  const iterationSteps: IterationSteps<T> = [...steps, stepResult.result];

  return stepResult.isDone
    ? iterationSteps
    : iterateUntilDone(fn, stepResult.result, iterationSteps, depth - 1);
}

export function iteration<T>(fn: (x: T) => IterationStepResult<T>): (x: T) => IterationSteps<T> {
  return (x: T) => iterateUntilDone(fn, x, [], 10000);
}