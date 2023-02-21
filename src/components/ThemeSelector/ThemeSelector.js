import styles from './ThemeSelector.module.scss'
import { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { Within } from "@theme-toggles/react"

const themeColors = ['#58249C', '#249C6B', '#B70233']

export const ThemeSelector = () => {
  const { mode, setColor, setMode } = useTheme()
  const [isToggled, setIsToggled] = useState(mode !== 'dark')

  const setToggle = () => {
    setIsToggled(!isToggled)
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className={styles.ThemeSelector}>
      <div className={styles.ModeToggle}>
        <Within toggled={isToggled}
                toggle={setToggle}
                className={mode === 'dark' ? styles.LightMode : styles.DarkMode}/>
      </div>
      <div className={styles.ThemeButtons}>
        {themeColors.map(color => (
          <div key={color}
               className={styles.ThemeButton}
               style={{ background: color }}
               onKeyUp={() => setColor(color)}
               onClick={() => setColor(color)} />
        ))}
      </div>
    </div>
  )
}