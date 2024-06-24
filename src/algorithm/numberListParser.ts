export function numberListParser(input: string): number[] {
  const result = input
    .split(',')
    .map(x => parseFloat(x));
  
  if (result.some(x => isNaN(x))) throw new Error('Invalid input.');
  
  return result;
}