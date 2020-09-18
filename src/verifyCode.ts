import { toArrayOfNumbers } from './utils/toArrayOfNumbers'
import { getCheckDigits } from './getCheckDigits'

export function verifyCode(body: string, checkDigits: string) {
  const fixedBody = toArrayOfNumbers(body)
  const expectedCheckDigits = getCheckDigits(fixedBody, checkDigits.length)

  return checkDigits === expectedCheckDigits.join('')
}
