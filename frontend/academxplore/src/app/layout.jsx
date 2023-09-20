import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Poppins} from 'next/font/google'
import './globals.css'

const poppins = Poppins(
  {
    subsets: ['latin'],
    weight: ['400', '500', '200', '300']
  }
)
export const metadata = {
  title: 'AcademXplore',
  description: 'Simpler and better',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
