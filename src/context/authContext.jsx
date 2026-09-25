import { createContext, useContext, useState } from "react";
import { LoginUser } from "../api/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => {
        const savedToken = localStorage.getItem('auth_token');
        return savedToken ? savedToken : null
    });
    const [user, setUser] = useState(() => {
        const saveUser = localStorage.getItem('user_data')
        if (saveUser) {
            return JSON.parse(saveUser);
        }
        return null;
    })

    // login function

    const login = async (username, password) => {
        const data = await LoginUser(username, password);
        // console.log(data);

        const authToken = data.accessToken;

        setToken(authToken)
        setUser(data);

        localStorage.setItem('auth_token', authToken);
        localStorage.setItem('user_data', JSON.stringify(data));
        return data;
    }

    const logout = () => {
        setToken(null);
        setUser(null);

        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_data');
    }


    const isAuthenticated = token !== null && token !== undefined ? true : false

    return (
        <AuthContext.Provider value={{ token, user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}