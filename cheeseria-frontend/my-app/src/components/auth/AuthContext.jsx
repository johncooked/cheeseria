import React, { createContext, useState, useContext } from "react";

/**
 * Context object for managing authentication state.
 * @type {React.Context<{ isLoggedIn: boolean; login: () => void; logout: () => void; }>}
 */
const AuthContext = createContext();

/**
 * Provider component for managing authentication state.
 * This project only uses client-side authentication for simplicity.
 * I would create an actual auth system in the backend if i were to spend more time.
 *
 * @param {object} props - The props for the AuthProvider component.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the AuthProvider.
 * @returns {JSX.Element} A React element representing the AuthProvider component.
 */
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    /**
     * Function to set the login status to true.
     */
    const login = () => {
        setIsLoggedIn(true);
    };

    /**
     * Function to set the login status to false.
     */
    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

/**
 * Custom hook for accessing authentication context.
 * @returns {{ isLoggedIn: boolean; login: () => void; logout: () => void; }} An object containing isLoggedIn, login, and logout functions.
 */
export const useAuth = () => useContext(AuthContext);
