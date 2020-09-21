import { createBody } from './createBody'

describe('createHexBody', () => {
  it('should generate with the specified size', () => {
    expect(createBody(5).length).toBe(5)
  })

  it('should generate only valid characters', () => {
    const randomCode = createBody(15)

    expect(randomCode.join('').length).toBe(15)
  })
})
