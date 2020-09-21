import { createHexBody } from './createHexBody'
import { getCheckDigits } from './getCheckDigits'

/**
 * Generates a random hexadecimal code.
 *
 * @param bodyLength The code's body length
 * @param checkLength The code's check digits length
 */
export function generateHexCode(
  bodyLength: number = 5,
  checkLength: number = 2
): [string, string] {
  const body = createHexBody(bodyLength)
  const checkDigits = getCheckDigits(body, checkLength)

  return [
    body
      .map((char) => char.toString(16))
      .join(''),
    checkDigits.join('')
  ]
}
