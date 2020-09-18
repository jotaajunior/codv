import { createBody } from './createBody'
import { getCheckDigits } from './getCheckDigits'

/**
 * Generates a random code.
 *
 * @param bodyLength The body length
 * @param checkLength The check digits length
 */
export function generateCode(
  bodyLength: number = 5,
  checkLength: number = 2
) {
  const body = createBody(bodyLength)
  const checkDigits = getCheckDigits(body, checkLength)

  return [
    body.join(''),
    checkDigits.join('')
  ]
}
