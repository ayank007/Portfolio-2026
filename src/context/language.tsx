import {createContext, useContext, useState} from 'react'

const LangCtx = createContext({})

export const LangToggler = () => useContext(LangCtx)

export const LangCtxProvider = (props:any) => {
    const [lang, setLang] = useState('eng')

    const toggleLang = (newLang:string='eng') => {
        setLang(newLang)
        localStorage.setItem("lang", JSON.stringify(newLang))
    }

    return (
        <LangCtx.Provider value={{lang, toggleLang}}>
            {props.children}
        </LangCtx.Provider>
    )
}