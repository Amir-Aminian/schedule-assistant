import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [validated,setValidated] = useState(false);

    return (
        <UserContext.Provider value={{validated}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
