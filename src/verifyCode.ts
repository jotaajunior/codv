import { toArrayOfNumbers } from './utils/toArrayOfNumbers'
import { getCheckDigit } from './getCheckDigit'

export function verifyCode(body: string, checkDigits: string) {
  const fixedBody = toArrayOfNumbers(body)

  const expectedCheckDigits: number[] = []
  for (let i = 0; i < checkDigits.length; ++i) {
    expectedCheckDigits.push(getCheckDigit([
      ...fixedBody,
      ...expectedCheckDigits
    ]))
  }

  return checkDigits === expectedCheckDigits.join('')
}
