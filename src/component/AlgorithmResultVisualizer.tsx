import { useState } from "react";

interface AlgorithmResultVisualizerProps<T> {
  result: IterationResult<T>;
}
export function AlgorithmResultVisualizer<T>(props: AlgorithmResultVisualizerProps<T>) {
  const [stepsVisible, setStepsVisible] = useState<boolean>(false);
  return (
    <>
      <p>Result</p>
      <p>{String(props.result.result)}</p>
      <p className='select-none' onClick={() => setStepsVisible(!stepsVisible)}>{stepsVisible ? 'v Hide' : '> Show'} steps</p>
      {stepsVisible &&
        props.result.steps.map(step => <p>{String(step)}</p>)}
    </>
  );
}
