import React, { createContext, useContext, useState } from 'react'
//js-cookie have method to access browsers cookie 
import Cookies from 'js-cookie';

export const AuthContext = createContext()

// Children => all component...
const AuthProvider = ({children}) => {

    // in this variable we store token (using js-cookie - get method) and userInfo
    const initialUserState = Cookies.get("jwt") || localStorage.getItem("ChatApp");

    // Parse the user data & store in state
    const [authUser, setAuthUser] = useState(initialUserState ? JSON.parse(initialUserState) : undefined);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser ]}>
        {children}
    </AuthContext.Provider>
  )

}

//user Context assign to userAuth
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;