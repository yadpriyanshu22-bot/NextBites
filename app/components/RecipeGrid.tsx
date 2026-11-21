"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipes }: { recipes: any[] }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(recipes.map((r) => r.category))),
  ];

  const filtered = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.name.toLowerCase().includes(search.toLowerCase()) ||
      recipe.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search recipes or cuisines..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filter-row">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="recipe-grid">
        {filtered.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}