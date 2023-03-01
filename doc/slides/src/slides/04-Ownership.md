---
slide: 4
lang: en-US
---

<section>

## Ownership

| Type      | Description    | Take Ownership? |
| --------- | -------------- | --------------- |
| self      | Whole Value    | Yes             |
| &self     | Borrow         | No              |
| &mut self | Mutable Borrow | No              |

</section>

<section>

### Conflicting borrows

```rust
let mut s = String::from("hello");

let r1 = &mut s;
let r2 = &mut s;

println!("{}, {}", r1, r2);
```

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

</section>
