import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [validated, setValidated] = useState(false);

    const [SQ, setSQ] = useState(undefined);

    const [SA, setSA] = useState(false);

    return (
        <UserContext.Provider value={{validated, setValidated, SQ, setSQ, SA, setSA}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
