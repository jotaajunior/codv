import { generateCode } from './generateCode'
import { verifyCode } from './verifyCode'

describe('generateCode', () => {
  it('should produce valid code', () => {
    const [body, checkDigits] = generateCode()

    expect(verifyCode(body, checkDigits)).toBe(true)
  })

  it('should generate with arbitrary size', () => {
    const [body, checkDigits] = generateCode(5, 5)

    expect(body.length).toBe(5)
    expect(checkDigits.length).toBe(5)
  })
})
