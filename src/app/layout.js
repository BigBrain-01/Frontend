import './globals.css'
import AuthProvider from '@/components/AuthProvider/AuthProvider'



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          {children}
        </AuthProvider>

      </body>
    </html>
  )
}
