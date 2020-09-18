import { createCode } from './createCode'

describe('createCode', () => {
  it('should generate with the specified size', () => {
    expect(createCode(5).length).toBe(5)
  })

  it('should generate only valid characters', () => {
    const randomCode = createCode(15)

    expect(randomCode.join('').length).toBe(15)
  })
})
