import styles from './RecipeList.module.scss'
import { Link } from 'react-router-dom'

export const RecipeList = ({recipes}) => {

  if(recipes.length === 0) {
    return (
      <div className="error">No recipes to load...</div>
    )
  }

  return (
    <div className={styles.RecipeList}>
      {recipes.map(recipe => (
        <div className={styles.card}
             key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
        </div>
      ))}
    </div>
  )
}