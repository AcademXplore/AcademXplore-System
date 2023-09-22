import NextAuth from "next-auth"
import { CredentialsProvider } from "next-auth/providers"

const handler = NextAuth({
  providers: [
    
  ]
})

export { handler as GET, handler as POST }