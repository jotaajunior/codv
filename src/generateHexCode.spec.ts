import { generateHexCode } from './generateHexCode'
import { verifyCode } from './verifyCode'

describe('generateHexCode', () => {
  it('should produce valid code', () => {
    const [body, checkDigits] = generateHexCode()

    expect(verifyCode(body, checkDigits)).toBe(true)
  })

  it('should generate with arbitrary size', () => {
    const [body, checkDigits] = generateHexCode(5, 5)

    expect(body.length).toBe(5)
    expect(checkDigits.length).toBe(5)
  })
})
