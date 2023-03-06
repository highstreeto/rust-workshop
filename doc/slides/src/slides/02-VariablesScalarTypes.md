---
slide: 2
lang: en-US
---

## Variables and Scalar Types

Declare with `let` or `let mut`

Integer and float types have fixed size

```rust
let int: i32 = -15;
let uint: u32 = 256;
let float: f32 = 1.0;
let double: f64 = -15.103E3;
let b: bool = true;
let c: char = '🦀'; // Unicode Scalar Value
let i = 15; // type is inferred
// these are all immutable

let mut k = 1;
println!("k: {}", k);
k += 1;
println!("k: {}", k);
```

Integer types

| Length  | Signed | Unsigned |
| ------- | ------ | -------- |
| 8-bit   | i8     | u8       |
| 16-bit  | i16    | u16      |
| 32-bit  | i32    | u32      |
| 64-bit  | i64    | u64      |
| 128-bit | i128   | u128     |
| arch    | isize  | usize    |

on overflow: debug -> panic, release -> wrapping

Integer Literals

| Type           | Literal     |
| -------------- | ----------- |
| Decimal        | 98_222      |
| Hex            | 0xff        |
| Octal          | 0o77        |
| Binary         | 0b1111_0000 |
| Byte (u8 only) | b'A'        |

Float type
f32 and f64

Bool type

By default, immutable

Char type

4-bytes in size, stores Unicode Scalar Value

Shadowing

Constants

```rust
const HTTP_NOT_FOUND: u32 = 404;
const FUNCTION_PREFIX: &str = "fn";

const UNIT: () = (); // () is the unit type, similar to void
```

Scalar Types
