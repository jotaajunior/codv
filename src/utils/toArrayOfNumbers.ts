export function toArrayOfNumbers(body: string) {
  return body
    .split('')
    .map(Number)
}
