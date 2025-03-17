import React from 'react'
import { createContext, useState, useEffect } from 'react'

export const DarkModeContext = createContext();

export const DarkModeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
    
    useEffect(() => {
      if(theme === "dark"){
        document.documentElement.classList.add('dark')
      }else{
        document.documentElement.classList.remove('dark')
      }

      localStorage.setItem("theme", theme)
    }, [theme])
    
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
    }
    return(
        <DarkModeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </DarkModeContext.Provider>
    )
}
