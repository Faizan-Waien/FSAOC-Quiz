import { createContext, useContext, useState } from "react";

const Context = createContext()

const value = () => {

    const [user, setUser] = useState({
        name: '',
        gender: '',
    })

    let userName = user.name
    let userGender = user.gender

    const [login, setLogin] = useState(({
        name: '',
        gender: '',
    }))

    let loginName = login.name
    let loginGender = login.gender

    const handleInputs = (e) => {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        setUser({ ...user, [name]: value })
    }

    const Submit = (e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setLogin({
            name: user.name,
            gender: user.gender,
        })
        setUser({
            name: '',
            gender: '',
        })
    }

    return { userName, userGender, handleInputs, Submit, loginName, loginGender }
}

const ContextProvider = ({ children }) => {
    return (
        <Context.Provider value={value()}>{children}</Context.Provider>
    )
}

const useContxt = () => useContext(Context)

export {
    useContxt,
    ContextProvider
}