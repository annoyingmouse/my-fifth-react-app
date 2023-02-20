import styles from './RecipeList.module.scss'
import { projectFirestore } from '../../firebase/config'
import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import deleteIcon from '../../assets/deleteIcon.svg'

export const RecipeList = ({recipes}) => {
  const { mode } = useTheme()

  if(recipes.length === 0) {
    return (
      <div className="error">No recipes to load...</div>
    )
  }

  const handleDelete = id => {
    projectFirestore.collection('recipes').doc(id).delete()
  }

  return (
    <div className={styles.RecipeList}>
      {recipes.map(recipe => (
        <div className={`${styles.card} ${mode === 'dark' ? styles.dark : ''}`}
             key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
          {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <img src={deleteIcon}
               alt="delete"
               className={styles.delete}
               onClick={() => handleDelete(recipe.id)}/>
        </div>
      ))}
    </div>
  )
}