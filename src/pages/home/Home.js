import styles from './Home.module.scss'
import { projectFirestore } from '../../firebase/config'
import { RecipeList } from '../../components/RecipeList/RecipeList'
import { useEffect, useState } from 'react'

export const Home = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    setIsPending(true)
    const unSub = projectFirestore.collection('recipes').onSnapshot(snapshot => { 
      if(snapshot.empty) {
        setError('No recipes to load')
        setIsPending(false)
      } else {
        setData(snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })))
        setIsPending(false)
      }
    }, err => { 
      setError(err.message)
      setIsPending(false)
    })
    return () => unSub()
  }, [])
  
  return (
    <div className={styles.Home}>
      { error && <div className="error">{ error }</div> }
      { isPending && <div className="loading">Loading...</div> }
      { data && <RecipeList recipes={data} /> }
    </div>
  )
}