import { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

const themeReducer = (state, action) => {
  switch(action.type) {
    case 'SET_COLOR':
      return { 
        ...state,
        color: action.payload
      }
    case 'SET_MODE':
      return {
        ...state,
        mode: action.payload
      }
    default:
      return state
  }
}

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    color: '#58249C',
    mode: 'dark'
  })
  
  const setColor = color => {
    dispatch({ 
      type: 'SET_COLOR',
      payload: color
    })
  }

  const setMode = mode => {
    dispatch({ 
      type: 'SET_MODE',
      payload: mode
    })
  }

  return (
    <ThemeContext.Provider value={{ ...state, setColor, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}