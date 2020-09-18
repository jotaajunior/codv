import { getCheckDigit } from './getCheckDigit'

/**
 * Generates random check digits for the code.
 *
 * @param code The code
 * @param checkLength The length of the check digits
 */
export function getCheckDigits(code: number[], checkLength: number) {
  const checkDigits: number[] = []

  for (let i = 0; i < checkLength; ++i) {
    checkDigits.push(getCheckDigit([...code, ...checkDigits]))
  }

  return checkDigits
}
