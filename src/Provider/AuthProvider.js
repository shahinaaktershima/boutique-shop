"use client"




import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";


export const AuthContext = createContext([])

const AuthProvider = ({children}) => {
    const [user,setUser] = useState([])
    const [loading,setLoading] = useState(true)
    
    const signup = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signin = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser);
            setLoading(false)
            setUser(currentUser)
        })
        return()=>{
            return subscribe
        }
    },[])

    const authinfo = {
        signup,signin,user,logout,loading
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;