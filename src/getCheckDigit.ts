/**
 * Gets one check digit for the code's body.
 *
 * @param body The code's body
 */
export function getCheckDigit(body: number[]) {
  const bodyLength = body.length + 1

  let verifier = 0
  for (let i = bodyLength, j = 0; i > 1; --i, ++j) {
    verifier += i * body[j]
  }
  verifier %= 11

  return verifier <= 1 ? 0 : 11 - verifier
}
