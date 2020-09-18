import { verifyCode } from './verifyCode'

describe('getCheckDigits', () => {
  it('should verify correctly', () => {
    expect(verifyCode('1', '9')).toBe(true)

    expect(verifyCode('1', '91')).toBe(true)
  })
})
