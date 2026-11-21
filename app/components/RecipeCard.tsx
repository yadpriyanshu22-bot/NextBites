import Link from "next/link";

const categoryColors: Record<string, string> = {
  Italian: "linear-gradient(135deg, #ffe2e2 0%, #ffe9d6 100%)",
  Indian: "linear-gradient(135deg, #ffe5c8 0%, #ffd8b5 100%)",
  Drinks: "linear-gradient(135deg, #ddf0ff 0%, #eef6ff 100%)",
  American: "linear-gradient(135deg, #ffe3d3 0%, #ffd5c2 100%)",
  Snacks: "linear-gradient(135deg, #fff2b2 0%, #ffe699 100%)",
  Dessert: "linear-gradient(135deg, #f3e0ff 0%, #ffe0f0 100%)",
  Mediterranean: "linear-gradient(135deg, #dff7df 0%, #e9fae0 100%)",
};

export function getCategoryGradient(category: string) {
  return (
    categoryColors[category] ||
    "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)"
  );
}

export default function RecipeCard({ recipe }: { recipe: any }) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="recipe-card">
      <div
        className="card-banner"
        style={{ background: getCategoryGradient(recipe.category) }}
      >
        {recipe.emoji}
      </div>

      <div className="card-body">
        <h2 className="card-title">{recipe.name}</h2>
        <p className="card-desc">{recipe.description}</p>

        <div className="badge-row">
          <span className="badge">⏱ {recipe.time}</span>
          <span className="badge">{recipe.difficulty}</span>
          <span className="badge badge-cuisine">{recipe.category}</span>
        </div>
      </div>
    </Link>
  );
}