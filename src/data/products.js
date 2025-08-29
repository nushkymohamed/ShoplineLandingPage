import Gascooker4Burner from '../assets/4BG.png';
import Kettle from '../assets/Kettle.jpg';
import LEDTV from '../assets/TV.png';
import FAN from '../assets/Fan.jpg';
import Oven from '../assets/Oven.jpg';
import AC from '../assets/AC.jpg';

export const BRAND = {
  name: "shopline.lk",
  accent: "from-orange-500 to-yellow-500",
  accentText: "text-orange-500",
  button: "bg-black",
  gradient: "bg-black hover:bg-gray-800",
};

export const SAMPLE_PRODUCTS = [
  {
    id: "p1",
    name: "Smart Gas Cooker 4-Burner",
    price: 35990,
    badge: "Best Seller",
    image: Gascooker4Burner,
    category: "Kitchen",
    gallery: [Gascooker4Burner, LEDTV, FAN , Kettle ,Oven ,AC],
    description: "This gas cooker features 4 powerful burners for efficient and even cooking. Ideal for large families and those who love to cook.",
    reviews: [
      { user: "Nimal", rating: 5, comment: "Cooks fast and evenly. Great build quality!" },
      { user: "Sasha", rating: 4, comment: "Solid product, just wish the knobs were metal." },
    ],
  },
  {
    id: "p2",
    name: "Electric Kettle 1.8L Auto Off",
    price: 3990,
    badge: "New",
    image: Kettle,
    category: "Kitchen",
    gallery: [Kettle, Oven],
    description: "Boil water quickly with this 1.8L electric kettle. Features auto shut-off and boil-dry protection.",
    reviews: [
      { user: "Amal", rating: 4, comment: "Quick to boil. Safe for kids too." },
      { user: "Dinali", rating: 5, comment: "Very reliable for daily use!" },
    ],
  },
  {
    id: "p3",
    name: '40" HD LED TV',
    price: 89990,
    badge: "Deal",
    image: LEDTV,
    category: "Television",
    gallery: [LEDTV, AC, FAN],
    description: "Crisp HD visuals, immersive sound, and HDMI/USB support make this TV a perfect home companion.",
    reviews: [
      { user: "Ruwan", rating: 5, comment: "Picture quality is awesome for this price." },
      { user: "Tharushi", rating: 4, comment: "Sleek design. Speakers could be louder." },
    ],
  },
  {
    id: "p4",
    name: '12" Silent Pedestal Fan',
    price: 12990,
    badge: null,
    image: FAN,
    category: "Home Appliances",
    gallery: [FAN, LEDTV],
    description: "Stay cool with this silent fan. Adjustable height and 3-speed settings included.",
    reviews: [
      { user: "Kasun", rating: 5, comment: "Whisper quiet. Perfect for bedroom use." },
      { user: "Mala", rating: 4, comment: "Good airflow but the stand feels a bit light." },
    ],
  },
  {
    id: "p5",
    name: "Convection Oven 30L",
    price: 25990,
    badge: null,
    image: Oven,
    category: "Kitchen",
    gallery: [Oven, Gascooker4Burner],
    description: "Bake, grill, and roast with this 30L convection oven. Great for pizzas, cakes, and meats.",
    reviews: [
      { user: "Chathura", rating: 5, comment: "Cooks evenly and quickly. Very impressed!" },
      { user: "Senu", rating: 4, comment: "Good value. Gets hot fast." },
    ],
  },
  {
    id: "p6",
    name: "Dual Inverter AC 9000 BTU",
    price: 189990,
    badge: "Limited",
    image: AC,
    category: "Cooling",
    gallery: [AC, FAN],
    description: "Energy-efficient AC with dual inverter technology. Quiet and fast cooling for any room.",
    reviews: [
      { user: "Ramesh", rating: 5, comment: "Cools fast and low noise. Highly recommended." },
      { user: "Nadeesha", rating: 4, comment: "A bit pricey but worth it." },
    ],
  }
];


export function formatLKR(cents) {
  return `LKR ${cents.toLocaleString("en-LK")}`;
}
