import {createContext, useContext, useEffect, useState} from 'react'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'
import { useRouter } from 'expo-router'

const TOKEN_KEY = "my-jwt"
const USER_ID = "my-id"
const USER_PROFILE = "my-profile"
const API_URL = process.env.EXPO_PUBLIC_API_URL
const AuthContext = createContext({
  onRegister: async (nome, cpf, email, instituicao, perfil, matricula, senha) => {},
  onLogin: async (email, senha) => {},
  onLogout: async () => {},
  authState: {
    user: {
      id: null,
      perfil: null,
      accessToken: null
    },
    authenticated: null
  }
})

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
  useEffect(() => {
    const login = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY)
      const userId = await SecureStore.getItemAsync(USER_ID)
      const userProfile = await SecureStore.getItemAsync(USER_PROFILE)

      if(token){
        axios.defaults.headers.common.Authorization = token
        
        setAuthState({
          user: {
            accessToken: token,
            id: userId,
            perfil: userProfile
          },
          authenticated: true
        })
      }
    }
    login()
  },[SecureStore, TOKEN_KEY, axios, setAuthState, USER_ID, USER_PROFILE])

  const register = async (nome, cpf, email, instituicao, perfil, matricula, senha) => {
    try {
      const res = await axios.post(`${API_URL}/usuario/cadastro`, {nome, cpf, email, instituicao, perfil, matricula, senha})
      console.log("🚀 ~ file: auth-context.jsx: 34 ~ login ~ result: ", res.data)
      return res.data
    } catch (error) {
      const msg = error.response.data
      return {error: true,  msg: {error: msg}}
    }
  }

  const login = async (email, senha) => {
    try {
      const result = await axios.post(`${API_URL}/auth/login`, {email, senha})

      console.log("🚀 ~ file: auth-context.jsx: 34 ~ login ~ result: ", result.data)

      setAuthState({
        user: result.data,
        authenticated: true
      })

      axios.defaults.headers.common.Authorization = result.data.accessToken

      await SecureStore.setItemAsync(TOKEN_KEY, result.data.accessToken)
      await SecureStore.setItemAsync(USER_ID, result.data.id)
      await SecureStore.setItemAsync(USER_PROFILE, result.data.perfil)

      return result.data;

    } catch (error) {
      const msg = error.response.data
      if(msg == "Bad credentials"){
        return {error: true,  msg: {error: "Credenciais Inválidas"}}
      }
      else{
        return {error: true,  msg: {error: msg}}
      }
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
