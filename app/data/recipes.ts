export type Recipe = {
  id: number;
  title: string;
  description: string;
  minutes: number;
  cuisine: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    description: "Creamy pasta with garlic, parmesan, and herbs.",
    minutes: 25,
    cuisine: "Italian",
  },
  {
    id: 2,
    title: "Paneer Butter Masala",
    description: "Soft paneer cooked in a rich, creamy tomato gravy.",
    minutes: 35,
    cuisine: "Indian",
  },
  {
    id: 3,
    title: "Classic Margherita Pizza",
    description: "A delicious pizza topped with cheese, basil, and tomato.",
    minutes: 30,
    cuisine: "Italian",
  },
  {
    id: 4,
    title: "Veg Fried Rice",
    description: "Flavorful rice tossed with fresh vegetables and sauces.",
    minutes: 20,
    cuisine: "Chinese",
  },
  {
    id: 5,
    title: "Chocolate Pancakes",
    description: "Fluffy pancakes topped with chocolate and maple syrup.",
    minutes: 15,
    cuisine: "American",
  },
  {
    id: 6,
    title: "Masala Dosa",
    description: "Crispy dosa filled with spiced potato masala.",
    minutes: 30,
    cuisine: "South Indian",
  },
];