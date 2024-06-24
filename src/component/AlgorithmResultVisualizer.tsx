import { useState } from "react";

interface AlgorithmResultVisualizerProps<T> {
  result: IterationResult<T>;
}

export function AlgorithmResultVisualizer<T>(props: AlgorithmResultVisualizerProps<T>) {
  const [stepsVisible, setStepsVisible] = useState<boolean>(false);

  function displayResult(result: T): JSX.Element {
    return (
      result instanceof Array
        ? <div className='flex'>
            {result.map(ele => <p className='flex-none basis-20 px-2 border text-center'>{String(ele)}</p>)}
          </div>
        : <p>{String(result)}</p>
    );
  }

  return (
    <>
      <p>Result</p>
      {displayResult(props.result.result)}
      <p className='select-none' onClick={() => setStepsVisible(!stepsVisible)}>{stepsVisible ? 'v Hide' : '> Show'} steps</p>
      {stepsVisible &&
        props.result.steps.map((step, index) => displayResult(step))
      }
    </>
  );
}
