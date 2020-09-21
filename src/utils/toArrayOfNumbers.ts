export function toArrayOfNumbers(body: string) {
  return body
    .split('')
    .map((number) => parseInt(number, 16))
}
