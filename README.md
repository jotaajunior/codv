# Codv

![](https://img.shields.io/badge/license-MIT-green)
[![codecov](https://codecov.io/gh/jotaajunior/codv/branch/master/graph/badge.svg?token=XE6V7I3RF4)](https://codecov.io/gh/jotaajunior/codv)
[![Codv](https://circleci.com/gh/jotaajunior/codv/tree/launch.svg?style=shield)](https://circleci.com/gh/jotaajunior/codv)

Codv is a tiny library for generating arbitrary-sized codes with [check digits](https://en.wikipedia.org/wiki/Check_digit).

## Installation

```shell
yarn add codv
```

## Usage

### `generateCode`

Generates a random code.

```ts
import { generateCode } from 'codv'

const [code, checkDigits] = generateCode() // [ '25931', '49' ]
```

#### Parameters

- `bodyLength`: the length of the code's body. Default is 5.
- `checkLength`: the length of the code's check digits. Default is 2.

### `verifyCode`

Verifies a random code.

```ts
import { verifyCode } from 'codv'

const code = verifyCode('25931', '49') // true
```

#### Parameters

- `body`: The code's body.
- `checkDigits`: The check digits to validate against the body.

## Example

Codv utilizes the modulo 11 algorithm for calculating the check digits, this is the same algorithm used by the [CPF](https://en.wikipedia.org/wiki/Cadastro_de_Pessoas_F%C3%ADsicas) and a lot of other identifications numbers worldwide.

The following codes demonstrates how to generate and verify CPF-like codes.

### Generating a valid random CPF

```ts
import { generateCode } from 'codv'

const cpf = generateCode(9, 2)

console.log(cpf) // [ '471896067', '34' ]
```

### Verifying a CPF

```ts
import { verifyCode } from './verifyCode'

console.log(verifyCode('471896067', '34')) // true
console.log(verifyCode('471896067', '35')) // false
```
