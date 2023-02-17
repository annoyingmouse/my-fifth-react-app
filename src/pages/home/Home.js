import styles from './Home.module.scss'
import { useFetch } from '../../hooks/useFetch'
import { RecipeList } from '../../components/RecipeList'

export const Home = () => {
  const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes')
  return (
    <div className={styles.Home}>
      { error && <div className="error">{ error }</div> }
      { isPending && <div className="loading">Loading...</div> }
      { recipes && <RecipeList recipes={recipes} /> }
    </div>
  )
}