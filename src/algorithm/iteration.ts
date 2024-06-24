// Creates an array of intermediate results from running fn on inputValue.
export function iterationSteps<T>(fn: (x: T, currentDepth: number) => IterationStepResult<T>, inputValue: T, steps: IterationSteps<T> = [], currentDepth: number = 0, maxDepth = 1000): IterationSteps<T> {
  if (currentDepth >= maxDepth) throw new Error('Recursion depth max reached.');

  const stepResult: IterationStepResult<T> = fn(inputValue, currentDepth);
  const steps0: IterationSteps<T> = [...steps, stepResult.result];

  return stepResult.isDone
    ? steps0
    : iterationSteps(fn, stepResult.result, steps0, currentDepth + 1, maxDepth);
}

// Creates a new function that runs fn to a max depth and returns an object containing the
// result of each step, until iteration has completed.
export function iteration<T>(fn: (x: T, currentDepth: number) => IterationStepResult<T>, maxDepth = 1000): (x: T, currentDepth?: number) => IterationResult<T> {
  return (x: T, currentDepth: number = 0) => {
    const steps: IterationSteps<T> = iterationSteps(fn, x, [], currentDepth, maxDepth);
    const result = steps[steps.length - 1];

    const iterationResult: IterationResult<T> = {steps, result};
    return iterationResult;
  }
}