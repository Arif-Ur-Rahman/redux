// app/layout.tsx
import { ReduxProvider } from '@/redux/provider'
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Redux Demo',
  description: 'Learning Redux with Next.js',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
