import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import '../firebase';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const auth = getAuth();
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser({
                ...user,
            });
            setLoading(false);
        });
        return unSubscribe;
    }, []);

    // signup
    async function signup({ email, password, username }) {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        // update profile
        await updateProfile(user, { displayName: username });
        setCurrentUser({
            ...user,
        });
    }

    // login
    function login({ email, password }) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    function logout() {
        const auth = getAuth();
        return signOut(auth);
    }
    const authValue = useMemo(
        () => ({
            currentUser,
            signup,
            login,
            logout,
        }),
        [currentUser]
    );
    return <AuthContext.Provider value={authValue}>{!loading && children}</AuthContext.Provider>;
}
