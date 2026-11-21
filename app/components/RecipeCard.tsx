import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="card">
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>

      <div className="card-meta">
        <span>⏱ {recipe.time}</span>
        <span>{recipe.difficulty}</span>
        <span>{recipe.category}</span>
      </div>
    </div>
  );
}