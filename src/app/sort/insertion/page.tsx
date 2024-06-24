'use client'

import { numberListParser } from "~/algorithm/numberListParser";
import { insertionSort } from "~/algorithm/sort/insertionSort";
import AlgorithmRunner from "~/component/AlgorithmRunner";
import NavBar from "~/component/NavBar";

export default function InsertionSort() {
  return (
    <>
      <NavBar />
      <AlgorithmRunner fn={insertionSort} inputParser={numberListParser} inputHint="Enter a comma-separated list of numbers." />
    </>
  )
}