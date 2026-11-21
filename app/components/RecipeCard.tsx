import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="recipe-card">
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
  );
}