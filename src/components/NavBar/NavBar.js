import { Link } from 'react-router-dom'
import styles from './NavBar.module.scss'
import { SearchBar } from '../SearchBar/SearchBar'
import { useTheme } from '../../hooks/useTheme'

export const NavBar = () => {
  const { color } = useTheme()

  return (
    <div className={styles.NavBar} style={{ background: color }}>
      <nav>
        <Link to="/" className={styles.brand}>
          <h1>Cooking Ninja</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create recipe</Link>
      </nav>
    </div>
  )
}