---
slide: 3
lang: en-US
---

<section>

## 3. Functions

<ol>
<li class="fragment fade-in-then-semi-out">Declaration</li>
<li class="fragment fade-in-then-semi-out">main-Function</li>
<li class="fragment fade-in-then-semi-out">Modules</li>
</ol>

</section>

<section>

### 3.1. Declaration

<div class="fragment fade-in-then-semi-out">

Declared with `fn` with optional trailing return type

</div>

<div class="fragment fade-in-then-semi-out">

Last expression is the return value (or early with `return`)

</div>

<div class="fragment fade-in-then-semi-out">

Example:

```rust
fn five() -> i32 {
    5
}

fn fibonacci(n: u32) -> u32 {
    if n == 1 || n == 2 {
        return 1;
    }

    fibonacci(n - 2) + fibonacci(n - 1)
}
```

</div>

</section>

<section>

### 3.2. main-Function

<div class="fragment fade-in-then-semi-out">

Binary (crate) must have a parameterless `main`

</div>

<div class="fragment fade-in-then-semi-out">

To return an exit code, use `Result<T, E>` or `ExitCode`

</div>

<div class="fragment fade-in-then-semi-out">

Example:

```rust
fn main() {
    println!("Hello World!");
}

fn main() -> std::process::ExitCode {
    ExitCode::FAILURE
}

fn main() -> std::process::ExitCode {
    ExitCode::from(3) // for arbitrary exit code's
}
```

</div>

</section>

<section>

### 3.3. Modules

<div class="fragment fade-in-then-semi-out">

To group functions (and types), we can use `mod`

</div>

<div class="fragment fade-in-then-semi-out">

Functions are only visible in the current module scope, for outside access use `pub` and for navigating into `::`

</div>

<div class="fragment fade-in-then-semi-out">

Example:

```rust
fn test() {
    outer::inner::one();
}

mod outer {
    pub mod inner {
        pub fn one() -> i32 {
            1
        }
    }
}
```

</div>

</section>
