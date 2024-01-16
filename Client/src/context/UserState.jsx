import { Children, createContext, useEffect, useState } from "react"

export const UserContext = createContext();

export function UserState(props) {

    const [mode, setMode] = useState("Buyer");
    const url = 'http://localhost:5000/api'
    const [userId, setUserId] = useState(localStorage.getItem('userId'));
    useEffect(()=>{
        setUserId(localStorage.getItem('userId'));
    }, [])

    return <UserContext.Provider value={{ mode, setMode, url, userId }} >
        {props.children}
    </UserContext.Provider>
}