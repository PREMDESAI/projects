use std::fs;

fn main() {
    let dir = fs::read_dir(".").unwrap();
    for d in dir {
        println!("{:?}", d.unwrap().path());
    }
}
