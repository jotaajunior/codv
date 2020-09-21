import { toArrayOfNumbers } from './utils/toArrayOfNumbers'
import { getCheckDigits } from './getCheckDigits'

/**
 * Verify if the code and the check digits matches.
 *
 * @param body The code's body
 * @param checkDigits The code's check digits
 */
export function verifyCode(body: string, checkDigits: string) {
  const fixedBody = toArrayOfNumbers(body)
  const expectedCheckDigits = getCheckDigits(fixedBody, checkDigits.length)

  return checkDigits === expectedCheckDigits.join('')
}
