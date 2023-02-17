import styles from './App.module.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Create } from './pages/create/Create'
import { Search } from './pages/search/Search'
import { Recipe } from './pages/recipe/Recipe'
import { NavBar } from './components/NavBar/NavBar'
import { ThemeSelector } from './components/ThemeSelector/ThemeSelector'
import { useTheme } from './hooks/useTheme'


export const App = () => {
  const { mode } = useTheme()
  return (
    <div className={`${styles.App} ${mode === 'dark' ? styles.dark : ''}`}>
      <BrowserRouter>
        <NavBar />
        <ThemeSelector />
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