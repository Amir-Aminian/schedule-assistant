import React, { createContext, useState } from "react";

export const UserContext = React.createContext({});

const UserProvider = ({children}) => {
    const [validated,setValidated] = useState(false);

    return (
        <UserContext.Provider value={{validated}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
