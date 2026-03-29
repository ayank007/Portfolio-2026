import {createContext, useContext, useState} from 'react'

const NavCtx = createContext({})

export const NavpageToggler = () => useContext(NavCtx)

export const NavCtxProvider = (props:any) => {
    const [navpageStatus, setNavpage] = useState(false)

    const toggleNavpage = () => {
        setNavpage(!navpageStatus)
    }

    return (
        <NavCtx.Provider value={{navpageStatus, toggleNavpage}}>
            {props.children}
        </NavCtx.Provider>
    )
}