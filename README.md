# Rust Workshop

<!-- LTeX: language=de-AT -->
## Zusammenfassung

*Rust* wird gerne als System-Programmiersprache (d.h. für Kernel und Betriebssystem) bezeichnet, weil die Garantien des *Rust*-Compilers hier sehr wichtig sind (Stichwort: **Memory Safety**). Aber nicht nur im Bereich der Kernel und Betriebssystem kann *Rust* punkten: durch ein solides Sprachdesign und guten Tooling-Support ist *Rust auch in vielen anderen Bereichen vorgedrungen (wie CLI-Anwendungen, Web, Spielentwicklung oder selbst im Browser über WebAssembly).

In diesem Workshop werden wir uns daher mit dieser spannenden und modernen Programmiersprache auseinandersetzen. Der Workshop selbst gliedert sich in zwei Teile: in den ersten theoretischen Teil und den zweiten praktischen Teil.

Im ersten Teil werden wir uns mit der grundlegenden Syntax der Sprache auseinandersetzen und die wichtigsten semantischen Konzepten (**Ownwership**) besprechen. Hier werden wir uns natürlich auch mit Kontrollstrukturen und eigenen Datentypen beschäftigen.

Im zweiten Teil des Workshops werden wir zwei Anwendungen schrittweise erstellen. Diese sind kurz zusammengefasst:
* Eine CLI-Anwendung, die JSON / YAML-Dateien verarbeitet ([clap](https://docs.rs/clap/latest/clap/), [serde](https://serde.rs/))
* Einen einfachen Editor in Form einer Desktop-Anwendung mit einem Web-Frontend ([Tauri](https://tauri.app/), [Monaco](https://microsoft.github.io/monaco-editor/))

Den Funktionsumfang und die Detailverliebtheit der beiden Anwendungen werden wir dann konkret am Termin selbst herausarbeiten. Hier wäre dann eine gute Gelegenheit, seine eigenen Ideen / Fragen zu einzubringne. 

Wer beim zweiten praktischen Teil mitmachen möchte, sollte bitte [rustup](https://rustup.rs/) auf seinem System installieren. Für die Desktop-Anwendung wird ein aktuelles [Node.JS](https://nodejs.org/en/) benötigt (>= 18.14.0)

<!-- LTeX: language=en-US -->
## License

The files in src/ are licensed under: [MIT License](/src/LICENSE)

The files in doc/ are licensed under: [Creative Commons Attribution 4.0 International License](/doc/LICENSE)
