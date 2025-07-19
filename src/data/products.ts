export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  description: string;
  specifications: { [key: string]: string };
  inStock: boolean;
  rating: number;
  reviews: number;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Executive Office Chair",
    price: 15999,
    originalPrice: 19999,
    image: "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg",
    images: [
      "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg",
      "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg"
    ],
    category: "office",
    description: "Ergonomic executive chair with premium leather upholstery and adjustable height mechanism.",
    specifications: {
      "Material": "Premium Leather",
      "Color": "Black",
      "Dimensions": "65cm x 70cm x 110-120cm",
      "Weight Capacity": "120 kg"
    },
    inStock: true,
    rating: 4.5,
    reviews: 128,
    featured: true
  },
  {
    id: 2,
    name: "Modern L-Shaped Sofa",
    price: 42999,
    originalPrice: 54999,
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    images: [
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
    ],
    category: "living-room",
    description: "Contemporary L-shaped sofa with premium fabric upholstery and comfortable cushioning.",
    specifications: {
      "Material": "Premium Fabric",
      "Color": "Gray",
      "Dimensions": "280cm x 180cm x 85cm",
      "Seating Capacity": "5-6 people"
    },
    inStock: true,
    rating: 4.7,
    reviews: 89,
    featured: true
  },
  {
    id: 3,
    name: "Wooden Dining Table Set",
    price: 28999,
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
    images: [
      "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
      "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg"
    ],
    category: "dining",
    description: "Solid wood dining table with 6 chairs, perfect for family dining.",
    specifications: {
      "Material": "Solid Sheesham Wood",
      "Color": "Natural Brown",
      "Dimensions": "180cm x 90cm x 75cm",
      "Seating": "6 chairs included"
    },
    inStock: true,
    rating: 4.6,
    reviews: 156,
    featured: true
  },
  {
    id: 4,
    name: "King Size Platform Bed",
    price: 35999,
    originalPrice: 42999,
    image: "https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg",
    images: [
      "https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg",
      "https://images.pexels.com/photos/1743228/pexels-photo-1743228.jpeg"
    ],
    category: "bedroom",
    description: "Modern platform bed with built-in storage and premium finish.",
    specifications: {
      "Material": "Engineered Wood",
      "Color": "Walnut Brown",
      "Size": "King Size (198cm x 203cm)",
      "Storage": "Under-bed storage included"
    },
    inStock: true,
    rating: 4.4,
    reviews: 92,
    featured: true
  },
  {
    id: 5,
    name: "Ergonomic Study Chair",
    price: 8999,
    image: "https://images.pexels.com/photos/2041629/pexels-photo-2041629.jpeg",
    images: [
      "https://images.pexels.com/photos/2041629/pexels-photo-2041629.jpeg"
    ],
    category: "office",
    description: "Comfortable study chair with mesh back and adjustable features.",
    specifications: {
      "Material": "Mesh & Plastic",
      "Color": "Black",
      "Dimensions": "60cm x 60cm x 95-105cm",
      "Features": "Height adjustable, Swivel"
    },
    inStock: true,
    rating: 4.3,
    reviews: 234,
    featured: false
  },
  {
    id: 6,
    name: "Coffee Table with Storage",
    price: 12999,
    image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg",
    images: [
      "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg"
    ],
    category: "living-room",
    description: "Stylish coffee table with hidden storage compartments.",
    specifications: {
      "Material": "Engineered Wood",
      "Color": "Oak Finish",
      "Dimensions": "120cm x 60cm x 45cm",
      "Storage": "Hidden compartments"
    },
    inStock: true,
    rating: 4.2,
    reviews: 67,
    featured: false
  }
];

export const categories = [
  { id: "office", name: "Office Furniture", image: "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg" },
  { id: "living-room", name: "Living Room", image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg" },
  { id: "bedroom", name: "Bedroom", image: "https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg" },
  { id: "dining", name: "Dining", image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg" }
];