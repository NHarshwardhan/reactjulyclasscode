import React ,{ createContext, useState } from 'react'


const AuthContext = createContext()

// children -> UserProfile and LoginButton
const AuthProvider = ({children})=>{
    
    const [user , setUser] = useState(null)

    const login = (userData) => setUser(userData)

    const logout = ()=> setUser(null)

    return(
            <AuthContext.Provider value={{user, login, logout}}>
               {children}
            </AuthContext.Provider>
          
    )

}

export {AuthContext, AuthProvider}