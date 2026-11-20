import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="recipe-card">
      <div className="recipe-card-content">
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>

        <div className="recipe-info">
          <span>⏱ {recipe.minutes} min</span>
          <span>{recipe.cuisine}</span>
        </div>
      </div>
    </article>
  );
}
