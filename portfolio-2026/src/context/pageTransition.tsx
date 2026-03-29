import {createContext, useContext, useState} from 'react'

const AnimCtx = createContext({})

export const AnimToggler = () => useContext(AnimCtx)

export const AnimCtxProvider = (props:any) => {
    const [animStatus, setAnimStatus] = useState(false)

    const toggleAnimStatus = () => {
        setAnimStatus(!animStatus)
    }

    return (
        <AnimCtx.Provider value={{animStatus, toggleAnimStatus}}>
            {props.children}
        </AnimCtx.Provider>
    )
}