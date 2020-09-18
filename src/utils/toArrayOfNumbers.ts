export function toArrayOfNumbers(code: string) {
  return code
    .split('')
    .map(Number)
}
