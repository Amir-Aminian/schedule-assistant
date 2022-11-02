import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [validated, setValidated] = useState(false);

    const [userEmail, setUserEmail] = useState(undefined);

    const [SQ, setSQ] = useState(undefined);

    const [SA, setSA] = useState(false);

    return (
        <UserContext.Provider value={{validated, setValidated, SQ, setSQ, SA, setSA, userEmail, setUserEmail}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
