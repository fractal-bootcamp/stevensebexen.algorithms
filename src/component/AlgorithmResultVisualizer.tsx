import { useState } from "react";

interface AlgorithmResultVisualizerProps<T> {
  result: IterationResult<T>;
}

function Step<T>(props: {step: T}): JSX.Element {
  return (
    props.step instanceof Array
      ? <div className='flex'>
          {props.step.map((ele, index) => <p key={index} className='flex-none basis-20 px-2 border text-center'>{String(ele)}</p>)}
        </div>
      : <p>{String(props.step)}</p>
  );
}

export function AlgorithmResultVisualizer<T>(props: AlgorithmResultVisualizerProps<T>) {
  const [stepsVisible, setStepsVisible] = useState<boolean>(false);

  

  return (
    <>
      <p>Result</p>
      <Step step={props.result.result} />
      <p className='select-none' onClick={() => setStepsVisible(!stepsVisible)}>{stepsVisible ? 'v Hide' : '> Show'} steps</p>
      {stepsVisible &&
        props.result.steps.map((step, index) => <Step key={index} step={step} />)
      }
    </>
  );
}
