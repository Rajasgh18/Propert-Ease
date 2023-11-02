import { Children, createContext, useState } from "react"

export const UserContext = createContext();

export function UserState(props) {

    const [mode, setMode] = useState("Buyer");

    return <UserContext.Provider value={{ mode, setMode }} >
        {props.children}
    </UserContext.Provider>
}