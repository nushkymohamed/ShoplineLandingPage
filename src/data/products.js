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
  { id: "p1", name: "Smart Gas Cooker 4-Burner", price: 35990, badge: "Best Seller", image: Gascooker4Burner, category: "Kitchen" },
  { id: "p2", name: "Electric Kettle 1.8L Auto Off", price: 3990, badge: "New", image: Kettle, category: "Kitchen" },
  { id: "p3", name: "40\" HD LED TV", price: 89990, badge: "Deal", image: LEDTV, category: "Television" },
  { id: "p4", name: "12\" Silent Pedestal Fan", price: 12990, badge: null, image: FAN, category: "Home Appliances" },
  { id: "p5", name: "Convection Oven 30L", price: 25990, badge: null, image: Oven, category: "Kitchen" },
  { id: "p6", name: "Dual Inverter AC 9000 BTU", price: 189990, badge: "Limited", image: AC, category: "Cooling" },
 {
    id: "p7",
    name: "Smart Gas Cooker 4-Burner",
    price: 35990,
    badge: "Best Seller",
    image: Gascooker4Burner,
    category: "Kitchen",
    gallery: [Gascooker4Burner, LEDTV, FAN],
    description: "Detailed description about this gas cooker...",
    reviews: [
      { user: "Alice", rating: 5, comment: "Excellent!" },
      { user: "Bob", rating: 4, comment: "Very good." },
    ],
  },

];

export function formatLKR(cents) {
  return `LKR ${cents.toLocaleString("en-LK")}`;
}
