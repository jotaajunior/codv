import { getCheckDigits } from './getCheckDigits'

describe('getCheckDigits', () => {
  it('should generate valid check digits', () => {
    expect(getCheckDigits([1], 2)).toEqual([9, 1])
  })
})
