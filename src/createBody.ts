/**
 * Creates a random body for the code.
 *
 * @param length The length of the code
 */
export function createBody(length: number) {
  const randomCode = []

  for (let i = 0; i < length; ++i) {
    randomCode.push(Math.floor(Math.random() * 10))
  }

  return randomCode
}
