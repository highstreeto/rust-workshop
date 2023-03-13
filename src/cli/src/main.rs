use clap::Parser;
use cli::Point;
use std::path::PathBuf;

#[derive(Parser)]
#[command(author, version, about, long_about = None)]
struct Args {
    /// Sets the input file. Can be JSON or YAML.
    #[arg(short, long)]
    input: PathBuf,

    /// Sets the output file. Can be JSON or YAML.
    #[arg(short, long)]
    output: PathBuf,
}

#[derive(Debug)]
enum Errors {
    IoError,
}

fn main() -> Result<(), Errors> {
    let args = Args::parse();

    let input = std::fs::read_to_string(&args.input).map_err(|_| Errors::IoError)?;

    let input: Vec<Point> = serde_json::from_str(&input).map_err(|_| Errors::IoError)?;

    for v in input.iter() {
        println!("{v}");
    }

    let output = serde_yaml::to_string(&input).map_err(|_| Errors::IoError)?;

    if !args.output.parent().unwrap().exists() {
        std::fs::create_dir_all(&args.output.parent().unwrap()).map_err(|_| Errors::IoError)?;
    }

    std::fs::write(&args.output, output).map_err(|_| Errors::IoError)?;

    Ok(())
}
