---
slide: 2
lang: en-US
---

<section>

## 2. Variables and Scalar Types

<ol>
<li class="fragment fade-in-then-semi-out">Declaration</li>
<li class="fragment fade-in-then-semi-out">Integer and Float types</li>
<li class="fragment fade-in-then-semi-out">Bool and Unit</li>
<li class="fragment fade-in-then-semi-out">Char</li>
<li class="fragment fade-in-then-semi-out">Shadowing</li>
<li class="fragment fade-in-then-semi-out">Constants</li>
</ol>

</section>

<section>

### 2.1. Declaration

<div class="fragment fade-in-then-semi-out">

Variables are declared with `let` <small>(with optional type)</small>

</div>

<div class="fragment fade-in-then-semi-out">

By default, immutable

</div>

<div class="fragment fade-in-then-semi-out">

Adding the `mut` suffix makes them mutable

</div>

<div class="fragment fade-in-then-semi-out">

Example:

```rust
let variable: i32 = 15;
let variable_infer = 15; // type is i32
let mut mutable_variable: i32 = -15; // should be snake_case
```

</div>

</section>

<section>

### 2.2. Integer and Float types

<div class="fragment fade-in-then-semi-out">

Integer and Float types have fixed size <small>(special type for arch.)</small>

</div>

<div style="display: flex; gap: 2rem;">

<div class="fragment fade-in-then-semi-out">

| Length  | Signed  | Unsigned |
| ------- | ------- | -------- |
| 8-bit   | `i8`    | `u8`     |
| 16-bit  | `i16`   | `u16`    |
| 32-bit  | `i32`   | `u32`    |
| 64-bit  | `i64`   | `u64`    |
| 128-bit | `i128`  | `u128`   |
| arch    | `isize` | `usize`  |

</div>

<div class="fragment fade-in-then-semi-out">

| Length | Signed |
| ------ | ------ |
| 16-bit | `f16`  |
| 32-bit | `f32`  |

On integer overflow / underflow:

Debug: panic

Release: wrapping

</div>

</div>

</section>

<section>

### 2.3. Bool and Unit

<div class="fragment fade-in-then-semi-out">

`bool`: as in other languages (`true` and `false`)

</div>

<div class="fragment fade-in-then-semi-out">

The "special" type `()` denoting the "Nothing" type

</div>

<div class="fragment fade-in-then-semi-out">

Example:

```rust
let boolean: bool = true;
```

</div>

</section>

<section>

### 2.4. Char

<div class="fragment fade-in-then-semi-out">

Stores one Unicode Scalar Value (including emojis)

</div>

<div class="fragment fade-in-then-semi-out">

4-bytes in size

</div>

<div class="fragment fade-in-then-semi-out">

Example:

```rust
let ferris: char = '🦀';
let a: char  = 'a';
```

</div>

</section>

<section>

### 2.5. Shadowing

<div class="fragment fade-in-then-semi-out">

Instead of mutating variables, they can also be shadowed

</div>

<div class="fragment fade-in-then-semi-out">

Can change type (useful for parsing / converting)

</div>

<div class="fragment fade-in-then-semi-out">

Example:

```rust
let counter = 1;
// counter = 1
{
    let counter = 'a';
    // counter = 'a'
}
// counter = 1
```

</div>

</section>

<section>

### 2.6. Constants

<div class="fragment fade-in-then-semi-out">

Constants can be defined with `const`, and must include type

</div>

<div class="fragment fade-in-then-semi-out">

Can only be set to a constant expression

</div>

<div class="fragment fade-in-then-semi-out">

But can include arithmetic operations and `if`, `match`, `loop`, etc.

</div>

<div class="fragment fade-in-then-semi-out">

Example:

```rust
const HTTP_NOT_FOUND: u32 = 404; // should be SCREAMING_SNAKE_CASE
const FUNCTION_PREFIX: &str = "fn";
const UNIT: () = ();
const A_HUGE_NUMBER: u64 = 64000 * 5000 * 2;
```

</div>

</section>
