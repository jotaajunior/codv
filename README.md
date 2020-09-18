# Codv

![](https://img.shields.io/badge/license-MIT-green)
[![codecov](https://codecov.io/gh/jotaajunior/codv/branch/master/graph/badge.svg?token=XE6V7I3RF4)](https://codecov.io/gh/jotaajunior/codv)
[![Codv](https://circleci.com/gh/jotaajunior/codv.svg?style=shield)](https://circleci.com/gh/jotaajunior/codv)

Codv is a tiny library for generating arbitrary-sized codes with [check digits](https://en.wikipedia.org/wiki/Check_digit).

## Installation

```shell
yarn add codv
```

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
- `checkLength` the length of the check digits. Default is 2.

### `verifyCode`

Verifies a random code.

```ts
import { verifyCode } from 'codv'

const code = verifyCode('25931', '49') // true
```

#### Parameters

- `code` The code.
- `checkDigit` The check digit for the code.

## Example

Codv utilizes the modulo 11 algorithm for calculating the check digits, the same algorith as [CPF](https://en.wikipedia.org/wiki/Cadastro_de_Pessoas_F%C3%ADsicas), so it's possible to generate and verify them:

```ts
// Generating randdom CPFs

import { generateCode } from 'codv'

const cpf = generateCode(9, 2)

console.log(cpf) // [ '471896067', '34' ]
```

And verifying:

```ts
// Verifying CPFs

import { verifyCode } from './verifyCode'

console.log(verifyCode('471896067', '34')) // true
console.log(verifyCode('471896067', '35')) // false
```