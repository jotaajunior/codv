import { createCode } from './createCode'
import { getCheckDigits } from './getCheckDigits'

export function generateCode(
  bodyLength: number = 5,
  checkLength: number = 2
) {
  const body = createCode(bodyLength)
  const checkDigits = getCheckDigits(body, checkLength)

  return [
    body.join(''),
    checkDigits.join('')
  ]
}
