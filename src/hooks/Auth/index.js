import { Children, createContext, useContext, useState } from "react";

const AuthProvider = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState({});

    const signIn = ({email, password}) => {
        setUser({id:1, name: "usuario 1", email});
    }
    const signOut = () => {
        setUser({});
    };

    return (
        <AuthProvider.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthProvider.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthProvider);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context;
}