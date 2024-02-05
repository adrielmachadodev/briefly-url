import { createContext, useState, useContext, useEffect } from "react";
import { UseLogin, UseRegister, UserVerifyToken } from "../hooks/useAuth";
import Cookies from 'js-cookie'
import axios from '../config/axios'

export const AuthContext = createContext()

export const UseAuthContextProvider = () => {
    const context = useContext(AuthContext)
    if(!context) throw new Error('useAuthProvider must be used within an AuthProvider')
    return context
}

export const AuthProvider = ({children}) => {

    const [ user, setUser ] = useState(null)
    const [ isAuthenticated, setIsAuthenticated ] = useState(false)
    const [ authErrors, setAuthErrors ] = useState(null)
    const [ urls, setUrls ] = useState([])

    const signIn = async user => {
        try {
            const res = await UseLogin(user)
            res.data.token = `bearer ${res.data.token}`
            window.localStorage.setItem('userLogged', JSON.stringify(res.data))
            setUser(res.data)
            setIsAuthenticated(true)
            setAuthErrors(null)
        } catch (error) {
            setIsAuthenticated(false)
            // setAuthErrors(error.response.data)
        }
    }

    const signUp = async user => {

        try {
            const res = await UseRegister(user)
            res.data.token = `bearer ${res.data.token}`
            window.localStorage.setItem('userLogged', JSON.stringify(res.data))
            setUser(res.data)
            setIsAuthenticated(true)
            setAuthErrors(null)
        } catch (error) {
            console.log(error);
            setIsAuthenticated(false)
            // setAuthErrors(error.response.data)
        }
    }

    const signOut = async () => {
        window.localStorage.removeItem('userLogged')
        setUser(null);
        setIsAuthenticated(false);
        location.reload()
    };

    useEffect(() => {

        if(authErrors){
            const timer = setTimeout(() => {
                setAuthErrors(null)
            }, 5000);
            return () => clearTimeout(timer)
        }
    }, [authErrors])

    useEffect(() => {

        const loggedUser = JSON.parse(window.localStorage.getItem('userLogged'))
        if(loggedUser) {
            setUser(loggedUser)
            setIsAuthenticated(true)
        }

    }, [])

    const addUrl = (url) => {
        setUrls([...urls, url])
    }

    const deleteUrl = (id) => {
        const urlFound = urls.find(url => url._id === id)
        if(urlFound) {
            const newUrls = urls.filter(url => url._id !== id)
            setUrls(newUrls)
        }
        else console.log('Ese estado no existe')
    }

    const saveUrl = (id) => {
        const foundUrl = urls.find(url => url._id === id)
        const filterUrl = urls.filter(url => url._id !== id)
        if(foundUrl) {
            foundUrl.isSave = true
            setUrls([...filterUrl, foundUrl])
        } else console.log('URL no encontrada');
    }

    return (
        <AuthContext.Provider value={{signIn, signUp, signOut, user, isAuthenticated, authErrors, urls, addUrl, deleteUrl, saveUrl, setIsAuthenticated, setUser }}>
            {children}
        </AuthContext.Provider>
    )

}