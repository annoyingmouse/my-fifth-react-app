import styles from './SearchBar.module.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const SearchBar = ({ setSearchTerm }) => {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    navigate(`/search?q=${term}`)
  }

  return (
    
    <form onSubmit={handleSubmit} className={styles.SearchBar}>
      <label htmlFor='search'>Search:</label>
      <input type="text"
             id="search"
             placeholder="Search for a recipe"
             value={term}
             required
             onChange={e => setTerm(e.target.value)}/>
    </form>
  
  )
}