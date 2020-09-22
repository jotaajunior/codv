# Codv

![](https://img.shields.io/badge/license-MIT-green)
[![codecov](https://codecov.io/gh/jotaajunior/codv/branch/master/graph/badge.svg?token=XE6V7I3RF4)](https://codecov.io/gh/jotaajunior/codv)
![test](https://github.com/jotaajunior/codv/workflows/test/badge.svg)
![publish](https://github.com/jotaajunior/codv/workflows/publish/badge.svg)


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

---

### `generateHexCode`

Generates a random hexadecimal code.

The check digits of a hexadecimal code are still decimal values, as they are also generated with the same modulo 11 algorithm as the decimal codes.

```ts
import { generateHexCode } from 'codv'

const [code, checkDigits] = generateHexCode() // [ 'b5ac9', '26' ]
```

#### Parameters

- `bodyLength`: the length of the code's body. Default is 5.
- `checkLength`: the length of the code's check digits. Default is 2.

---

### `verifyCode`

Verifies if a given a random code (decimal or hexadecimal) is valid.

```ts
import { verifyCode } from 'codv'

const code = verifyCode('25931', '49') // true
```

#### Parameters

- `body`: The code's body.
- `checkDigits`: The check digits to validate against the body.

## Example

Codv utilizes the modulo 11 algorithm for calculating the check digits, this is the same algorithm used by the [CPF](https://en.wikipedia.org/wiki/Cadastro_de_Pessoas_F%C3%ADsicas) and a lot of other identifications numbers worldwide.

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

---

### Browser usage

```html
<script src="https://unpkg.com/codv@1.1.0/dist/bundle.js"></script>
```

Then:

```js
Codv.generateCode() // (2) [ "83087", "99" ]
```
