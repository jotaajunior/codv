import { createHexBody } from './createHexBody'

describe('createHexBody', () => {
  it('should generate with the specified size', () => {
    expect(createHexBody(5).length).toBe(5)
  })
})
