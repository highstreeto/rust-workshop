---
slide: 4
lang: en-US
---

<section>

## 4. Flow control

<ol>
<li class="fragment fade-in-then-semi-out">Conditional</li>
<li class="fragment fade-in-then-semi-out">Repetition</li>
<li class="fragment fade-in-then-semi-out">for-Loop</li>
</ol>

</section>

<section>

### 4.1. Conditional

<div class="fragment fade-in-then-semi-out">

For conditional flow, we have `if` and `match`

</div>

<div class="fragment fade-in-then-semi-out">

Both are expressions, not statements

</div>

<div class="fragment fade-in-then-semi-out">

`match` is exhaustive, use `_` for catch-all

</div>

<div class="fragment fade-in-then-semi-out">

Example:

<div style="display: flex; gap: 2rem">

```rust
let var: i32 = 10;

if var > 10 {
    println!("var is > 10!");
} else if var == 10 {
    println!("var is == 10!");
} else {
    println!("var is < 10!");
}
```

```rust
let var: i32 = 10;

match var {
    // .. indicates range
    11.. => println!("var > 10!"),
    10   => println!("var == 10!"),
    ..=9 => println!("var < 10!"),
}
```

</div>

</div>

</section>

<section>

### 4.2. Repetition

<div class="fragment fade-in-then-semi-out">

For repetition, we have `loop` and `while`

</div>

<div class="fragment fade-in-then-semi-out">

Both are also expressions, not statements

</div>

<div class="fragment fade-in-then-semi-out">

`loop` is infinite, controlled with `break` and `continue`, `while` loops until condition is `false`

</div>

<div class="fragment fade-in-then-semi-out">

Example:

<div style="display: flex; gap: 2rem">

```rust
let mut counter: i32 = 0;
loop {
    counter += 1;

    if counter > 10 {
        break;
    }
}
```

```rust
let mut counter: i32 = 0;
while counter < 10 {
    counter += 1;
}
```

</div>

</div>

</section>

<section>

### 4.3. for-Loop

<div class="fragment fade-in-then-semi-out">

For iterating over ranges and collections, we use `for`

</div>

<div class="fragment fade-in-then-semi-out">

Compatible with anything that supports `IntoIterator` <small>trait</small>

</div>

<div class="fragment fade-in-then-semi-out">

Example:

```rust
for counter in 1..=10 {
    println!("{counter}");
}
```

</div>

</section>
