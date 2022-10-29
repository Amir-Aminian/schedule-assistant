import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [validated, setValidated] = useState(false);

    const changeValidated = (value) => {
        setValidated(value)
    };

    return (
        <UserContext.Provider value={{validated, changeValidated}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
