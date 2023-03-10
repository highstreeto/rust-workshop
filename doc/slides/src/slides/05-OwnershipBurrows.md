---
slide: 5
lang: en-US
---

<section>

## 5. Ownership and Burrows

<ol>
<li class="fragment fade-in-then-semi-out">Ownership</li>
<li class="fragment fade-in-then-semi-out">Copy and Move</li>
<li class="fragment fade-in-then-semi-out">Burrows</li>
<li class="fragment fade-in-then-semi-out">Conflicting borrows</li>
<li class="fragment fade-in-then-semi-out">Lifetimes</li>
</ol>

</section>

<section>

### 5.1. Ownership

<div class="fragment fade-in-then-semi-out">

Each value in Rust has an owner

</div>

<div class="fragment fade-in-then-semi-out">

There can only be one owner at a time

</div>

<div class="fragment fade-in-then-semi-out">

When the owner goes out of scope, the value will be dropped

</div>

<div class="fragment fade-in-then-semi-out">

Example:

```rust
{
   let s = String::from("String!");
} // 's' dropped here
```

</div>

</section>

<section>

### 5.2. Copy and Move

<div class="fragment fade-in-then-semi-out">

Value which have the `Copy` trait are not moved, but simply copied

</div>

<div class="fragment fade-in-then-semi-out">

`Copy` is everything that has a fixed size: `i32`, `f32`, etc.

</div>

<div class="fragment fade-in-then-semi-out">

Anything else is moved by default (to make a copy, call `clone`)

</div>

<div class="fragment fade-in-then-semi-out">

Example:

<div style="display: flex; gap: 2rem">

```rust
let s1 = String::from("hello");
let s2 = s1; // move occurs here

println!("{}, world!", s1); // error!
```

```rust
let x = 5;
let y = x; // copy occurs here

println!("{}, {}", x, y);
```

</div>

</div>

</section>

<section>

### 5.3. Burrows

<div class="fragment fade-in-then-semi-out">

To reference data of non-`Copy` types (without cloning or moving), we can "burrow" them (creating references)

</div>

<div class="fragment fade-in-then-semi-out">

References must always be valid

</div>

<div class="fragment fade-in-then-semi-out">

There can only be one mutable reference or any number of immutable references

</div>

<div class="fragment fade-in-then-semi-out">

Example:

```rust
let mut s = String::from("hello");

let r1 = &s; // or &mut
```

</div>

</section>

<section>

### 5.4. Conflicting borrows

<div class="fragment fade-in-then-semi-out">

When using burrows, Rust strictly checks the burrow rules discussed previously

</div>

<div class="fragment fade-in-then-semi-out">

```rust
let mut s = String::from("Hello");

let r1 = &mut s;
let r2 = &mut s;

println!("{}, {}", r1, r2);
```

</div>

<div class="fragment fade-in-then-semi-out">

```shell
error[E0499]: cannot borrow `s` as mutable more than once at a time
--> src\main.rs:53:14
   |
52 |     let r1 = &mut s;
   |              ------ first mutable borrow occurs here
53 |     let r2 = &mut s;
   |              ^^^^^^ second mutable borrow occurs here
54 |
55 |     println!("{}, {}", r1, r2);
   |                        -- first borrow later used here
```

</div>

</section>

<section>

### 5.5. Lifetimes

<div class="fragment fade-in-then-semi-out">

References all have a lifetime, and must be the same or smaller than the data

</div>

<div class="fragment fade-in-then-semi-out">

Inferred in simple cases, but can be set by using `'`

</div>

<div class="fragment fade-in-then-semi-out">

This only defines the lifetime, but does not extend it!

</div>

<div class="fragment fade-in-then-semi-out">

Example:

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}
```

</div>

</section>
