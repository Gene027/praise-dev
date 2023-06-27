'use client'      //specify that this is client side provider

import { ThemeProvider } from 'next-themes'      //for light and dark mode
import type { FC, ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
    </ThemeProvider>
  )
}

export default Providers
