import { Link } from 'react-router-dom'
import styles from './NavBar.module.scss'

export const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <nav>
        <Link to="/" className={styles.brand}>
          <h1>Cooking Ninja</h1>
        </Link>
        <Link to="/create">Create recipe</Link>
      </nav>
    </div>
  )
}