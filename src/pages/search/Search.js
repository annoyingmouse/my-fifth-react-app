import style from './Search.module.scss'
import { useFetch } from '../../hooks/useFetch'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { RecipeList } from '../../components/RecipeList/RecipeList'


export const Search = () => {
  const queryString = useLocation()
  const queryParam = new URLSearchParams(queryString.search)
  const query = queryParam.get('q')
  const { data: recipes, isPending, error } = useFetch(`http://localhost:3000/recipes?q=${query}`)

  return (
    <div className={style.Search}>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipes && <RecipeList recipes={recipes} /> }
    </div>
  )
}