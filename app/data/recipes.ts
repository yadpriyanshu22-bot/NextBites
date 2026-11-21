
export type Recipe = {
  id: number;
  name: string;
  description: string;
  time: string;
  difficulty: string;
  category: string;
  emoji: string;
  color: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Blistered crust, San Marzano sauce, melty mozzarella, fresh basil.",
    time: "35 min",
    difficulty: "Medium",
    category: "Italian",
    emoji: "🍕",
    color: "pink",
  },
  {
    id: 2,
    name: "Paneer Tikka",
    description: "Smoky, spiced paneer cubes grilled with peppers and onion.",
    time: "40 min",
    difficulty: "Medium",
    category: "Indian",
    emoji: "🫒",
    color: "orange",
  },
  {
    id: 3,
    name: "Cold Brew Coffee",
    description: "Smooth, low-acid coffee steeped slow overnight.",
    time: "10 min",
    difficulty: "Easy",
    category: "Drinks",
    emoji: "☕",
    color: "blue",
  },
  {
    id: 4,
    name: "Veg Burger",
    description: "Crispy spiced patty, soft bun, tangy sauce, crunchy veg.",
    time: "30 min",
    difficulty: "Easy",
    category: "American",
    emoji: "🍔",
    color: "peach",
  },
  {
    id: 5,
    name: "Masala Fries",
    description: "Golden fries tossed in chatpata Indian spices.",
    time: "25 min",
    difficulty: "Easy",
    category: "Snacks",
    emoji: "🍟",
    color: "yellow",
  },
  {
    id: 6,
    name: "Lemon Iced Tea",
    description: "Bright, fizzy, lightly sweet, perfect for sunny afternoons.",
    time: "10 min",
    difficulty: "Easy",
    category: "Drinks",
    emoji: "🧋",
    color: "sky",
  },
  {
    id: 7,
    name: "Chocolate Mug Cake",
    description: "Warm, gooey, single-serve chocolate cake in minutes.",
    time: "8 min",
    difficulty: "Easy",
    category: "Dessert",
    emoji: "🍫",
    color: "purple",
  },
  {
    id: 8,
    name: "Greek Salad",
    description: "Crisp cucumber, tomatoes, olives, feta, and fresh herbs.",
    time: "15 min",
    difficulty: "Easy",
    category: "Healthy",
    emoji: "🥗",
    color: "green",
  },
];
