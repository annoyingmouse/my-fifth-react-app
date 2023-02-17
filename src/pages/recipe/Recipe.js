import styles from './Recipe.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useEffect } from "react"
import { useTheme } from '../../hooks/useTheme'

export const Recipe = () => {
  const { mode } = useTheme()
  const { id } = useParams()
  const { data: recipe, isPending, error } = useFetch(`http://localhost:3000/recipes/${id}`)
  const navigate = useNavigate()

  useEffect(() => {
    if(error) {
      setTimeout(() => navigate('/'), 2000)
    }
  }, [error, navigate])
  

  return (
    <div className={`${styles.Recipe} ${mode === 'dark' ? styles.dark : ''} `}>
      {isPending && <div className="laoding">Loading...</div>}
      {error && <p className="error">{error}</p>}
      {recipe && 
        <>
          <h1 className="page-title">{recipe.title}</h1>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className={styles.method}>{recipe.method}</p>
        </>
      }
    </div>
  )
}