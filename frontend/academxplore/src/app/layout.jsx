import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Poppins} from 'next/font/google'
import './globals.css'
import AuthProvider from '@/components/AuthProvider'

const poppins = Poppins(
  {
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
  }
)
export const metadata = {
  title: 'AcademXplore',
  description: 'Simpler and better',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <AuthProvider>
        <body className={poppins.className + " min-vh-100"}>{children}</body>
      </AuthProvider>
    </html>
  )
}
