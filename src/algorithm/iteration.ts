// Creates an array of intermediate results from running fn on inputValue.
export function iterationSteps<T>(fn: (x: T) => IterationStepResult<T>, inputValue: T, steps: IterationSteps<T> = [], depth = 1000): IterationSteps<T> {
  if (depth <= 0) throw new Error('Recursion depth max reached.');

  const stepResult: IterationStepResult<T> = fn(inputValue);
  const steps0: IterationSteps<T> = [...steps, stepResult.result];

  return stepResult.isDone
    ? steps0
    : iterationSteps(fn, stepResult.result, steps0, depth - 1);
}

// Creates a new function that runs fn to a max depth and returns an object containing the
// result of each step, until iteration has completed.
export function iteration<T>(fn: (x: T) => IterationStepResult<T>, depth = 1000): (x: T) => IterationResult<T> {
  return (x: T) => {
    const steps: IterationSteps<T> = iterationSteps(fn, x, [], depth);
    const result = steps[steps.length - 1];

    const iterationResult: IterationResult<T> = {steps, result};
    return iterationResult;
  }
}