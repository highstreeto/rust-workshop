---
slide: 3
lang: en-US
---

<section>

## Functions

Declared with `fn`, order-independent

Binary has single `main()` function

</section>

```rust
fn five() -> i32 {
    5
}
```

```rust
fn five() -> i32 {
    5; // error!
}
```

```rust
fn main() {
    let x = plus_one(5);

    println!("The value of x is: {x}");
}

fn plus_one(x: i32) -> i32 {
    x + 1
}
```
