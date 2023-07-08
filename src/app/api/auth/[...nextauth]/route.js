import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import connect from "@/utils/db"
import User from "@/models/User"
import bcrypt from "bcryptjs"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect()
        try {
          console.log(credentials)
          const user = await User.findOne({ email: credentials.email })
          console.log(user)
          if (!user) throw new Error("User not found!")
          else {
            const checkPassword = bcrypt.compare(user.password, credentials.password)
            if (checkPassword) {
              return user
            } else {
              throw new Error("Password is incorrect!")
            }
          }
        } catch (err) {
          throw new Error(err)
        }
      }
    })
  ],
  pages:{
    error:"/login",
  },
})

export { handler as GET, handler as POST };