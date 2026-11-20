
"use client";

import { useState } from "react";

const recipes = [
  {
    name: "Margherita Pizza",
    description: "Blistered crust, San Marzano sauce, melty mozzarella, fresh basil.",
    time: "35 min",
    difficulty: "Medium",
    category: "Italian",
    emoji: "🍕",
    color: "pink",
  },
  {
    name: "Paneer Tikka",
    description: "Smoky, spiced paneer cubes grilled with peppers and onion.",
    time: "40 min",
    difficulty: "Medium",
    category: "Indian",
    emoji: "🫒",
    color: "orange",
  },
  {
    name: "Cold Brew Coffee",
    description: "Smooth, low-acid coffee steeped slow overnight.",
    time: "10 min",
    difficulty: "Easy",
    category: "Drinks",
    emoji: "☕",
    color: "blue",
  },
  {
    name: "Veg Burger",
    description: "Crispy spiced patty, soft bun, tangy sauce, crunchy veg.",
    time: "30 min",
    difficulty: "Easy",
    category: "American",
    emoji: "🍔",
    color: "peach",
  },
  {
    name: "Masala Fries",
    description: "Golden fries tossed in chatpata Indian spices.",
    time: "25 min",
    difficulty: "Easy",
    category: "Snacks",
    emoji: "🍟",
    color: "yellow",
  },
  {
    name: "Lemon Iced Tea",
    description: "Bright, fizzy, lightly sweet, perfect for sunny afternoons.",
    time: "10 min",
    difficulty: "Easy",
    category: "Drinks",
    emoji: "🧋",
    color: "sky",
  },
  {
    name: "Chocolate Mug Cake",
    description: "Warm, gooey, single-serve chocolate cake in minutes.",
    time: "8 min",
    difficulty: "Easy",
    category: "Dessert",
    emoji: "🍫",
    color: "purple",
  },
  {
    name: "Greek Salad",
    description: "Crisp cucumber, tomatoes, olives, feta, and fresh herbs.",
    time: "15 min",
    difficulty: "Easy",
    category: "Healthy",
    emoji: "🥗",
    color: "green",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    `${recipe.name} ${recipe.category} ${recipe.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="page">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">🍴</span>
          <span>NextBites</span>
        </div>

        <div className="nav-links">
          <a href="#recipes">Recipes</a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </nav>

      <section className="hero">
        <h1>
          Find your next <span>bite.</span>
        </h1>
        <p>
          8 recipes to browse, search, and cook. Pick one and get the full method.
        </p>
      </section>

      <section className="recipes-section" id="recipes">
        <input
          className="search-bar"
          type="text"
          placeholder="Search recipes or cuisines..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <article className="recipe-card" key={recipe.name}>
              <div className={`recipe-image ${recipe.color}`}>
                <span>{recipe.emoji}</span>
              </div>

              <div className="recipe-content">
                <h2>{recipe.name}</h2>
                <p>{recipe.description}</p>

                <div className="recipe-tags">
                  <span>◷ {recipe.time}</span>
                  <span>{recipe.difficulty}</span>
                  <span className="category">{recipe.category}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <p className="empty-message">
            No recipes found. Try another search! 🍽️
          </p>
        )}
      </section>
    </main>
  );
}
