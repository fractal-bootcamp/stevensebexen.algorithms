'use client'

import { numberListParser } from "~/algorithm/numberListParser";
import { selectionSort } from "~/algorithm/sort/selectionSort";
import AlgorithmRunner from "~/component/AlgorithmRunner";
import NavBar from "~/component/NavBar";

export default function SelctionSort() {
  return (
    <>
      <NavBar />
      <AlgorithmRunner fn={selectionSort} inputParser={numberListParser} inputHint="Enter a comma-separated list of numbers." />
    </>
  )
}