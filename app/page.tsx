
"use client";

import { useState } from "react";
import { recipes } from "./data/recipes";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    `${recipe.name} ${recipe.category} ${recipe.description}`
      .toLowerCase()
      .includes(search.trim().toLowerCase())
  );

  return (
    <main className="page">
      <section className="hero">
        <h1>
          Find your next <span>bite.</span>
        </h1>

        <p>
          {recipes.length} recipes to browse, search, and cook.
          Pick one and get the full method.
        </p>
      </section>

      <section className="recipes-section" id="recipes">
        <input
          className="search-bar"
          type="text"
          placeholder="Search recipes or cuisines..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search recipes by name, category, or description"
        />

        <p className="recipe-count">
          {filteredRecipes.length}{" "}
          {filteredRecipes.length === 1 ? "recipe" : "recipes"} found
        </p>

        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <article className="recipe-card" key={recipe.id}>
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
