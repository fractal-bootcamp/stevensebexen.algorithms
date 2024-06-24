'use client'

import { bubbleSort, bubbleSortParser } from "~/algorithm/sort/bubbleSort";
import AlgorithmRunner from "~/component/AlgorithmRunner";
import NavBar from "~/component/NavBar";

export default function BubbleSort() {
  return (
    <>
      <NavBar />
      <AlgorithmRunner fn={bubbleSort} inputParser={bubbleSortParser} inputHint="Enter a comma-separated list of numbers." />
    </>
  )
}