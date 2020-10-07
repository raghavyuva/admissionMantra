import React, { createContext, useState } from "react";
import { AsyncStorage } from "react-native";
export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (usrinp) => {
                    try {
                        AsyncStorage.setItem('token', usrinp)
                    } catch (e) {
                        alert(e)
                    }
                },
                logout: async () => {
                    try {
                        AsyncStorage.removeItem('token');
                    } catch (e) {
                        alert(e)
                    }
                },
            }}

        > 
            {children}
        </AuthContext.Provider>
    );
};
