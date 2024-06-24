type IterationSteps<T> = Array<T>

type IterationStepResult<T> = {
  isDone: boolean;
  result: T
}

type IterationResult<T> = {
  steps: IterationSteps<T>;
  result: T
}
