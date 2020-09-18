# Codv

Codv is a tiny library for generating arbitrary-sized codes with [check digits](https://en.wikipedia.org/wiki/Check_digit).

## Usage

### `generateCode`

Generates a random code.

```ts
import { createCode } from 'codv'

const [code, checkDigits] = generateCode()
```

You can define the size of the code as well as the size of the check code:

```ts
generateCode(
  codeLength: number = 5,
  checkLength: number = 2
)
```

### `verifyCode`

Verifies a random code.

```ts
import { verifyCode } from 'codv'

const code = verifyCode(code, checkDigits)
```
