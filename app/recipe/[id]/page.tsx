import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes } from "../../data/recipes";
import { getCategoryGradient } from "../../components/RecipeCard";

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = recipes.find((r) => String(r.id) === id);

  if (!recipe) {
    notFound();
  }

  return (
    <div>
      <Link href="/" className="back-link">
        ← All recipes
      </Link>

      <div className="detail-header">
        <div
          className="detail-emoji-box"
          style={{ background: getCategoryGradient(recipe.category) }}
        >
          {recipe.emoji}
        </div>

        <div>
          <h1 className="detail-title">{recipe.name}</h1>
          <p className="detail-desc">{recipe.description}</p>
          <div className="badge-row">
            <span className="badge">⏱ {recipe.time}</span>
            <span className="badge">{recipe.difficulty}</span>
            <span className="badge badge-cuisine">{recipe.category}</span>
          </div>
        </div>
      </div>

      <div className="detail-columns">
        <section className="detail-section">
          <h2>Ingredients</h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2>Method</h2>
          <ol className="method-list">
            {recipe.steps.map((step: string, idx: number) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}