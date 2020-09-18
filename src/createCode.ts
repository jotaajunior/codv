export function createCode(length: number) {
  const randomCode = []

  for (let i = 0; i < length; ++i) {
    randomCode.push(Math.floor(Math.random() * 10))
  }

  return randomCode
}
