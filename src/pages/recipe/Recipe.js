import styles from './Recipe.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from "react"
import { useTheme } from '../../hooks/useTheme'

export const Recipe = () => {
  const { mode } = useTheme()
  const { id } = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(true)

  const handleClick = id => {
    projectFirestore.collection('recipes').doc(id).update({
      foo: data.foo === 'bar' ? 'foo' : 'bar'
    })
  }

  useEffect(() => {
    setIsPending(true)
    const unSub = projectFirestore.collection('recipes').doc(id).onSnapshot(doc => {
      if(!doc.exists) {
        setError('Could not find that recipe')
        setIsPending(false)
        setTimeout(() => navigate('/'), 2000)
      } else {
        setData({
          id: doc.id,
          ...doc.data()
        })
        setIsPending(false)
      }
    }, err => {
      setError(err.message)
      setIsPending(false)
      setTimeout(() => navigate('/'), 2000)
    })
    return () => unSub()
  }, [id, navigate])

  return (
    <div className={`${styles.Recipe} ${mode === 'dark' ? styles.dark : ''} `}>
      {isPending && <div className="laoding">Loading...</div>}
      {error && <p className="error">{error}</p>}
      {data && 
        <>
          <h1 className="page-title">{data.title} <span>{data.foo}</span></h1>
          <p>Takes {data.cookingTime} to cook.</p>
          <ul>
            {data.ingredients.map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className={styles.method}>{data.method}</p>
          <button type='button' onClick={() => handleClick(data.id)}>Update me</button>
        </>
      }
    </div>
  )
}