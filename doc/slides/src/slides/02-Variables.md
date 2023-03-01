---
slide: 2
lang: en-US
---

## Variables

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
