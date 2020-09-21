import { getCheckDigit } from './getCheckDigit'

/**
 * Generates random check digits for the code's body.
 *
 * @param body The code's body
 * @param checkLength The length of the check digits
 */
export function getCheckDigits(body: number[], checkLength: number) {
  const checkDigits: number[] = []

  for (let i = 0; i < checkLength; ++i) {
    checkDigits.push(getCheckDigit([...body, ...checkDigits]))
  }

  return checkDigits
}
