use clap::Parser;
use cli::Point;
use std::{error::Error, path::PathBuf};

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

fn main() -> Result<(), Box<dyn Error>> {
    let args = Args::parse();

    let input = std::fs::read_to_string(&args.input)?;

    let input: Vec<Point> = serde_json::from_str(&input)?;

    for v in input.iter() {
        println!("{v}");
    }

    let output = serde_yaml::to_string(&input)?;

    if !args.output.parent().unwrap().exists() {
        std::fs::create_dir_all(&args.output.parent().unwrap())?;
    }

    std::fs::write(&args.output, output)?;

    Ok(())
}
