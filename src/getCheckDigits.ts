import { getCheckDigit } from './getCheckDigit'

export function getCheckDigits(code: number[], checkLength: number) {
  const checkDigits: number[] = []

  for (let i = 0; i < checkLength; ++i) {
    checkDigits.push(getCheckDigit([...code, ...checkDigits]))
  }

  return checkDigits
}
