import { describe, expect, test } from 'vitest';
import { insertionSort } from './insertionSort';

describe('Insertion Sort', () => {
  test('Sorted array', () => {
    const input = [1, 2, 3, 6, 7, 8];
    const expected = [1, 2, 3, 6, 7, 8];
    const result = insertionSort(input).result;

    expect(result).toEqual(expected);
  });

  test('Unsorted array', () => {
    const input = [9, 2, 3, 7, 1];
    const expected = [1, 2, 3, 7, 9];
    const result = insertionSort(input).result;

    expect(result).toEqual(expected);
  });

  test('Single element array', () => {
    const input = [5];
    const expected = [5];
    const result = insertionSort(input).result;

    expect(result).toEqual(expected);
  });

  test('Empty array', () => {
    const input: number[] = [];
    const expected: number[] = [];
    const result = insertionSort(input).result;

    expect(result).toEqual(expected);
  });

  test('Array with duped values', () => {
    const input: number[] = [-1, -5, 0, 2, 2, -5, -1, 9, 0];
    const expected: number[] = [-5, -5, -1, -1, 0, 0, 2, 2, 9];
    const result = insertionSort(input).result;

    expect(result).toEqual(expected);
  });
})