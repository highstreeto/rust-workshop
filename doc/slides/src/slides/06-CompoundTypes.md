---
slide: 6
lang: en-US
---

<section>

## 6. Compound Types

<ol>
<li class="fragment fade-in-then-semi-out">Arrays</li>
<li class="fragment fade-in-then-semi-out">Slices</li>
<li class="fragment fade-in-then-semi-out">Tuples</li>
<li class="fragment fade-in-then-semi-out">Structs</li>
<li class="fragment fade-in-then-semi-out">Enums</li>
<li class="fragment fade-in-then-semi-out">Methods</li>
</ol>

</section>

<section>

## 6.1. Arrays

<div class="fragment fade-in-then-semi-out">

Fixed sized sequence of elements of the same type

</div>

<div class="fragment fade-in-then-semi-out">

Examples:

```rust
let array: [i32; 3] = [1, 2, 3];
let repeat: [i32; 3] = [1; 3]; // repeats 1 three times
```

</div>

</section>

<section>

## 6.2. Slices

<div class="fragment fade-in-then-semi-out">

Contiguous sequence of elements (same type) from an existing container

</div>

<div class="fragment fade-in-then-semi-out">

Does not take ownership, similar to references

</div>

<div class="fragment fade-in-then-semi-out">

Useful for functions who do not need the whole container

</div>

<div class="fragment fade-in-then-semi-out">

Examples:

```rust
let hello: &str = "Hello"; // str is a slice of a String
let array = [1, 2, 3];
let slice = &array[1..2];
```

</div>

</section>

<section>

## 6.3. Tuples

<div class="fragment fade-in-then-semi-out">

Fixed sized sequence of different types

</div>

<div class="fragment fade-in-then-semi-out">

Useful for returning multiple values from a function

</div>

<div class="fragment fade-in-then-semi-out">

Access via `.0`, `.1`, etc.

</div>

<div class="fragment fade-in-then-semi-out">

Examples:

```rust
let tuple: (i32, bool) = (15, true);
let (nr, boolean) = tuple;
let result: bool = tuple.1;
```

</div>

</section>

<section>

## 6.4. Structs

<div class="fragment fade-in-then-semi-out">

Like tuples, but with named values

</div>

<div class="fragment fade-in-then-semi-out">

The basic building block of custom types (besides enum's)

</div>

<div class="fragment fade-in-then-semi-out">

<div style="display: flex; gap: 2rem">

```rust
struct Workshop {
  name: String,
  author: String,
  participants: i32
}

let rust_ws = Workshop {
  name: String::from("Rust Workshop"),
  author: String::from("Martin Hochstrasser"),
  participants: 0
};
```

```rust
// struct update
let rust_ws = Workshop {
    participants: 20,
    ..rust_ws
};

// tuple struct
struct Point(i32, i32, i32);
```

</div>

</div>

</section>

<section>

## 6.5. Enums

<div class="fragment fade-in-then-semi-out">

Defines a type which can be any of several variants

</div>

<div class="fragment fade-in-then-semi-out">

But only one variant can be set

</div>

<div class="fragment fade-in-then-semi-out">

The basic building block of custom types (besides struct's)

</div>

<div class="fragment fade-in-then-semi-out">

Example:

```rust
enum Message {
    Ok(u32), // tuple
    Skipped,
    Error { code: u32, message: String }, // struct
}
```

</div>

</section>

<section>

## 6.6. Methods

<div class="fragment fade-in-then-semi-out">

Functions <small>(methods)</small> can be associated with strut's and enum's

</div>

<div class="fragment fade-in-then-semi-out">

Declared with a `impl` block

</div>

<div class="fragment fade-in-then-semi-out">

<div style="display: flex; gap: 2rem">

```rust
impl Workshop {
    fn new(
      name: String,
      author: String
    ) -> Workshop {
        Workshop {
            name,
            author,
            participants: 0,
        }
    }
}
```

```rust
impl Message {
  fn get_error_code(&self) -> Option<u32> {
    match self {
      Message::Ok (_) => None,
      Message::Skipped => None,
      Message::Error { code, .. } => Some(code)
    }
  }
}
```

</div>

</div>

</section>
