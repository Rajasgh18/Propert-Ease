import { Children, createContext, useState } from "react"

export const UserContext = createContext();

export function UserState(props) {

    const [mode, setMode] = useState("Buyer");
    const url = 'http://localhost:5000/api/'

    return <UserContext.Provider value={{ mode, setMode, url }} >
        {props.children}
    </UserContext.Provider>
}