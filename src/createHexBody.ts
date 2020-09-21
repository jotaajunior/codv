/**
 * Creates a random hexadecimal body for the code.
 *
 * @param length The length of the code's body
 */
export function createHexBody(length: number) {
  const randomCode = []

  for (let i = 0; i < length; ++i) {
    randomCode.push(Math.floor(Math.random() * 16))
  }

  return randomCode
}
