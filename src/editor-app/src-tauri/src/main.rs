#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::fs;

#[tauri::command]
fn load_file(path: &str) -> String {
    match fs::read_to_string(path) {
        Ok(str) => str,
        Err(err) => {
            println!("Error: {:?}", err);
            String::new()
        }
    }
}

#[tauri::command]
fn save_file(path: &str, contents: &str) {
    match fs::write(path, contents) {
        Ok(_) => (),
        Err(err) => println!("Error: {:?}", err),
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![load_file, save_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
