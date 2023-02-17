import styles from './App.module.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Create } from './pages/create/Create'
import { Search } from './pages/search/Search'
import { Recipe } from './pages/recipe/Recipe'
import { NavBar } from './components/NavBar'


export const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/"
                 element={ <Home /> }/>
          <Route path="/create"
                 element={ <Create /> }/>
          <Route path="/search"
                 element={ <Search /> }/>
          <Route path="/recipes/:id"
                 element={ <Recipe /> }/>
          <Route path="*"
                 element={<Navigate to="/" replace />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}