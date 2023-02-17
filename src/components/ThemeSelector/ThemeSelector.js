import styles from './ThemeSelector.module.scss'
import { useTheme } from '../../hooks/useTheme'
import modeIcon from '../../assets/modeIcon.svg'

const themeColors = ['#58249C', '#249C6B', '#B70233']

export const ThemeSelector = () => {
  const { mode, setColor, setMode } = useTheme()

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className={styles.ThemeSelector}>
      <div className={styles.ModeToggle}>
        {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <img src={modeIcon}
             onClick={toggleMode} 
             className={mode === 'dark' ? styles.DarkMode : styles.LightMode}
             alt="mode icon"/>
      </div>
      <div className={styles.ThemeButtons}>
        {themeColors.map(color => (
          // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <div key={color}
               className={styles.ThemeButton}
               style={{ background: color }}
               onClick={() => setColor(color)} />
        ))}
      </div>
    </div>
  )
}