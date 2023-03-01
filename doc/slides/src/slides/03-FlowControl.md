---
slide: 3
lang: en-US
---

<section>

## Flow control

Everything returns a value <small>(but can be Unit type)</small>

`ìf`, `loop`, `while`, `for` and `match`

</section>

<section>

### If

```rust
let input = String::from("Hello World");
if input == "Hello World" {
    println!("Classic") // Method with ! are macros
} else {
    println!("Unexpected");
}
```

</section>

<section>

### Loop

```rust
let mut counter = 1;
let loop_ret = loop {
    counter += 1;

    if counter == 15 {
    break counter
    }
};
assert_eq!(loop_ret, 15); // used in unit tests

let loop_ret = loop {
    break
};
println!("loop_ret: {:?}", loop_ret);
```

</section>

<section>

### While

```rust
let mut counter = 1;
let while_ret = while counter < 15 {
    counter += 1;
};
assert_eq!(counter, 15);
assert_eq!(while_ret, ());
```

</section>

<section>

### For

```rust
let range = (1..101);
for elem in range {
    print!("{} ", elem);
}
```

</section>
