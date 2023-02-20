import styles from './Create.module.scss'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'
import { useTheme } from '../../hooks/useTheme'


export const Create = () => {
  const { mode } = useTheme()
  const [title, setTitle] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [method, setMethod] = useState('')
  const ingredientInput = useRef(null)

  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    try{
      await projectFirestore.collection('recipes').add({ title, cookingTime: `${cookingTime} minutes`, ingredients, method })
      navigate('/')
    } catch(err) {
      console.log(err.message)
    }
  }

  const handleAdd = e => {
    e.preventDefault()
    const ingredient = newIngredient.trim()
    if(ingredient && !ingredients.includes(ingredient)) {
      setIngredients(prevIngredients => [...prevIngredients, ingredient])
    }
    setNewIngredient('')  
    ingredientInput.current.focus()
  }

  return (
    <div className={`${styles.Create} ${mode === 'dark' ? styles.dark : ''}`}>
      <h1 className={styles['page-title']}>Create a new recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input type="text"
                 required
                 value={title}
                 onChange={e => setTitle(e.target.value)}/>
        </label>
        <label>
          <span>Cooking time (minutes):</span>
          <input type="number"
                 required
                 value={cookingTime}
                 onChange={e => setCookingTime(e.target.value)}/>
        </label>
        <label>
          <span>Ingredients:</span>
          <div className={styles.ingredients}>
            <input type="text"
                   value={newIngredient}
                   ref={ingredientInput}
                   onChange={e => setNewIngredient(e.target.value)}/>
            <button type="button"
                    className="btn"
                    onClick={handleAdd}>Add</button>
          </div>
        </label>
        <p>Current ingredients: {ingredients.map(i => <em key={i}>{i}</em>)}</p>
        <label>
          <span>Method:</span>
          <textarea required
                    value={method}
                    onChange={e => setMethod(e.target.value)}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}