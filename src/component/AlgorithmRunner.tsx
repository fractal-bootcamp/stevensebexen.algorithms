import { useState } from "react";
import { AlgorithmResultVisualizer } from "./AlgorithmResultVisualizer";

interface AlgorithmRunnerProps<T> {
  fn: (parsedInput: T) => IterationResult<T>;
  inputParser: (input: string) => T;
  inputHint: string;
}
export default function AlgorithmRunner<T>(props: AlgorithmRunnerProps<T>) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<IterationResult<T> | null>(null);

  function run() {
    try {
      const parsedInput = props.inputParser(input);
      const result = props.fn(parsedInput);
      setResult(result);
      setErrorMessage(null);
    } catch(e) {
      if (e instanceof Error) {
        setErrorMessage(e.message);
        setResult(null);
      }
      else if (typeof e === 'string') {
        setErrorMessage(e);
        setResult(null);
      }
      else throw e;
    }
  }

  return (
    <div>
      <p>{props.inputHint}</p>
      <div className="flex gap-2">
        <input placeholder="Enter a value..." value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={run}>Run</button>
      </div>
      {errorMessage && <p className="text-[#ff6464]">{errorMessage}</p>}
      {result && <AlgorithmResultVisualizer result={result} />}
    </div>
  )
}