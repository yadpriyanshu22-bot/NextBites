import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="card">
      <h3>{recipe.title}</h3>

      <div className="card-meta">
        <span>⏱ {recipe.minutes} min</span>
        <span>{recipe.cuisine}</span>
      </div>
    </div>
  );
}