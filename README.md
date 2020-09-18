# Codv

![](https://img.shields.io/badge/license-MIT-green)
[![codecov](https://codecov.io/gh/jotaajunior/codv/branch/master/graph/badge.svg?token=XE6V7I3RF4)](https://codecov.io/gh/jotaajunior/codv)

Codv is a tiny library for generating arbitrary-sized codes with [check digits](https://en.wikipedia.org/wiki/Check_digit).

## Usage

### `generateCode`

Generates a random code.

```ts
import { createCode } from 'codv'

const [code, checkDigits] = generateCode() // [ '25931', '49' ]
```

You can define the size of the code as well as the size of the check code:

#### Parameters

- `codeLength` the size of the code. Default is 5.
- `checkLength` the length of the check digits, default is 2.

### `verifyCode`

Verifies a random code.

```ts
import { verifyCode } from 'codv'

const code = verifyCode('25931', '49') // true
```

#### Parameters

- `code` The code.
- `checkDigit` The check digit for the code.