import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {GoogleAuthProvider, signInWithRedirect, signOut} from "firebase/auth"

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const googleSigin = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
            console.log(user);
        });
        return unsubscribe;
    }, [])

    const initialState = {
        currentUser,
        googleSigin,
        logOut
    }

  return (
    <AuthContext.Provider value={initialState}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
