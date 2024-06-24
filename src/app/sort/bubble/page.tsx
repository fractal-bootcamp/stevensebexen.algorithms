'use client'

import { numberListParser } from "~/algorithm/numberListParser";
import { bubbleSort } from "~/algorithm/sort/bubbleSort";
import AlgorithmRunner from "~/component/AlgorithmRunner";
import NavBar from "~/component/NavBar";

export default function BubbleSort() {
  return (
    <>
      <NavBar />
      <AlgorithmRunner fn={bubbleSort} inputParser={numberListParser} inputHint="Enter a comma-separated list of numbers." />
    </>
  )
}