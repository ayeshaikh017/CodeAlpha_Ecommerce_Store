const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB");

Product.insertMany([
  {
    name: "Apple MacBook Pro 14-inch",
    price: 194900,
    description: "Apple M3 chip with 8-core CPU and 10-core GPU, 16GB RAM, 512GB SSD. Perfect for professionals and creators.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80"
  },
  {
    name: "iPhone 15 Pro",
    price: 134900,
    description: "6.1-inch Super Retina XDR display, A17 Pro chip, 128GB storage, Titanium design with advanced camera system.",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80"
  },
  {
    name: "Sony WH-1000XM5 Headphones",
    price: 29990,
    description: "Industry-leading noise cancelling wireless headphones with 30-hour battery life and premium sound quality.",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80"
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    price: 124999,
    description: "6.8-inch Dynamic AMOLED display, Snapdragon 8 Gen 3, 12GB RAM, 256GB storage, S Pen included.",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80"
  },
  {
    name: "Dell XPS 15 Laptop",
    price: 145000,
    description: "15.6-inch 4K OLED display, Intel Core i7-13700H, 16GB RAM, 1TB SSD, NVIDIA RTX 4050.",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80"
  },
  {
    name: "Apple Watch Series 9",
    price: 41900,
    description: "GPS + Cellular, 45mm Starlight aluminum case with sport band. Advanced health and fitness tracking.",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&q=80"
  },
  {
    name: "iPad Air 11-inch",
    price: 59900,
    description: "M2 chip, 128GB storage, Wi-Fi, 11-inch Liquid Retina display with True Tone.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80"
  },
  
  {
    name: "PlayStation 5 Console",
    price: 54990,
    description: "Ultra-high-speed SSD, 4K gaming, ray tracing, 825GB storage with DualSense wireless controller.",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&q=80"
  },
  {
    name: "LG 55-inch OLED TV",
    price: 129990,
    description: "4K OLED evo display, α9 AI Processor Gen6, Dolby Vision IQ, Dolby Atmos, webOS smart platform.",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80"
  },
  {
    name: "Bose QuietComfort Earbuds II",
    price: 24990,
    description: "True wireless earbuds with world-class noise cancellation, premium audio, and all-day comfort.",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80"
  },
  {
    name: "Nintendo Switch OLED",
    price: 34990,
    description: "7-inch OLED screen, enhanced audio, 64GB internal storage, adjustable stand for tabletop mode.",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500&q=80"
  },
  {
    name: "GoPro HERO12 Black",
    price: 44990,
    description: "5.3K60 video, 27MP photos, HyperSmooth 6.0 stabilization, waterproof to 33ft without housing.",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=500&q=80"
  },
  
  {
    name: "DJI Mini 4 Pro Drone",
    price: 89990,
    description: "4K/60fps HDR video, 34-min flight time, omnidirectional obstacle sensing, under 249g.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&q=80"
  },
  {
    name: "Logitech MX Master 3S Mouse",
    price: 8995,
    description: "Wireless ergonomic mouse with 8K DPI sensor, quiet clicks, USB-C charging, multi-device support.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80"
  }
]).then(() => {
  console.log("✅ 16 Products inserted successfully!");
  console.log("Products added:");
  console.log("- Electronics (Laptops, Phones, Tablets)");
  console.log("- Audio (Headphones, Earbuds)");
  console.log("- Gaming (PS5, Nintendo Switch)");
  console.log("- Cameras & Accessories");
  console.log("- Smart Home & Entertainment");
  process.exit();
}).catch(err => {
  console.error("❌ Error inserting products:", err);
  process.exit(1);
});