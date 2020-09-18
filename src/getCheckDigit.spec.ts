import { getCheckDigit } from './getCheckDigit'

describe('getCheckDigit', () => {
  it('should generate valid check digit', () => {
    // 1 * 2 = 2
    // 2 % 11 = 2
    // 11 - 2 = 9
    expect(getCheckDigit([1])).toBe(9)

    // 1 * 3 = 3
    // 9 * 2 = 18
    // 18 + 3 = 21
    // 21 % 11 = 10
    // 11 - 10 = 1
    expect(getCheckDigit([1, 9])).toBe(1)
  })
})
