---
slide: 6
lang: en-US
---

<section>

## Compound Types

Arrays, Tuples, Enum and Structs

And Slices

</section>

<section>

### Tuples, Array and Slices

Tuple: Sequence of values, different types, fixed length
Arrays: Sequence of values, same type, fixed length

Deconstructing

````rust
let tup = (500, 6.4, 1);
let (x, y, z) = tup;
let a = tup.0
```

```rust
let tuple = (1, true, "Test");
let array: [i32; 4] = [1, 2, 3, 4];
let slice = &array[0..2];

assert_eq!(tuple.1, true);
assert_eq!(array[1], 2); // if exceeding length -> panic
assert_eq!(array.len(), 4);
assert_eq!(slice.len(), 2);
````

</section>

<section>

### Enums

```rust
enum Message {
    Skipped,
    Ok(u32), // tuple
    Error { code: u32, msg: String }, // struct
}
```

</section>

<section>

### Struct

```rust
struct MessageQueue {
    name: String,
    messages: Vec&lt;Message&gt;,
    history: Vec&lt;Message&gt;
}
```

</section>

<section>

### Methods

```rust
impl Message {
  fn get_error_code(&self) -> Option&lt;&u32&gt; {
    match self {
      Message::Ok (_) => None,
      Message::Skipped => None,
      Message::Error { code, .. } => Some(code)
    }
  }
}
```

</section>
