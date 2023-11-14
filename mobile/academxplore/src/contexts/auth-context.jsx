import {createContext, useContext, useEffect, useState} from 'react'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'

const API_URL = process.env.EXPO_PUBLIC_API_URL
const AuthContext = createContext({})

export const useAuth = () => {
  return useContext(AuthContext)
}

export function AuthContextProvider({children}){
  const [authState, setAuthState] = useState({
    user: {
      id: null,
      perfil: null,
      accessToken: null
    },
    authenticated: null
  })

  const register = async (nome, cpf, email, instituicao, perfil, matricula, senha) => {
    try {
      return await axios.post(`${API_URL}/usuario/cadastro`, {nome, cpf, email, instituicao, perfil, matricula, senha})
    } catch (error) {
      return {error: true,  msg: {error}}
    }
  }

  const login = async (email, senha) => {
    try {
      const result = await axios.post(`${API_URL}/auth/login`, {email, senha})

      console.log("🚀 ~ file: auth-context.jsx: 34 ~ login ~ result: ", result)

      setAuthState({
        user: result.data,
        authenticated: true
      })

      axios.defaults.headers.common.Authorization = result.data.accessToken

      await SecureStore.setItemAsync(TOKEN_KEY, result.data.accessToken)

      return result;

    } catch (error) {
      return {error: true,  msg: {error}}
    }
  }

  const logout = async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY)
    
    axios.defaults.headers.common.Authorization = ''

    setAuthState({
      user: {
        id: null,
        perfil: null,
        accessToken: null
      },
      authenticated: false
    })
  }


  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
