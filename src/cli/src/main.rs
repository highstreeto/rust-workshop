use cli::Point;

fn main() {
    let point = Point { x: 1, y: 2 };

    let serialized = serde_json::to_string(&point).unwrap();
    println!("serialized as josn = {}", serialized);

    let deserialized: Point = serde_json::from_str(&serialized).unwrap();
    println!("deserialized as josn = {:?}", deserialized);

    let serialized = serde_yaml::to_string(&point).unwrap();
    println!("serialized as yaml = {}", serialized);

    let deserialized: Point = serde_yaml::from_str(&serialized).unwrap();
    println!("deserialized as yaml = {:?}", deserialized);
}
