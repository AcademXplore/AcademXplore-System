import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const API_URL = process.env.NEXT_PUBLIC_API_URL

const options = NextAuth({
  providers: [
    CredentialsProvider({
      id: "Credentials",
      name: "Credentials",
      authorize: async ({email, password}) => {
        try {
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({
            email,
            senha: password
          });

          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };

          const user = await fetch(`${API_URL}/auth/login`, requestOptions)
          if(user.status){
            return user.json();
          }
          else{
            throw new Error(user.json())
          }
        } catch (error) {
          throw new Error(error)
        }
      },
    })
  ],
  callbacks:{
    jwt: async ({token, user}) => {
      return {...token, ...user}
    },
    session: async ({session, token, user}) => {
      session.user = token
      return session
    }
  },
  pages: {
    error:"/sign-in",
  },
})

export {options as GET, options as POST}