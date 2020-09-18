/**
 * Gets one check digit for the code.
 *
 * @param code The code
 */
export function getCheckDigit(code: number[]) {
  const codeLength = code.length + 1

  let verifier = 0
  for (let i = codeLength, j = 0; i > 1; --i, ++j) {
    verifier += i * code[j]
  }
  verifier %= 11

  return verifier <= 1 ? 0 : 11 - verifier
}
