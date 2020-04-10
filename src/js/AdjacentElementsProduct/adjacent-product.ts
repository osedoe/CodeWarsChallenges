export function adjacentElementsProduct(arrInput: number[]): number {
  return Math.max(...arrInput
    .slice(0, -1)
    .map((n, i) => n * arrInput[i + 1]));
}

