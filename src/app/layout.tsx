import './globals.css'
import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { useMessages } from 'next-intl/server'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const messages = useMessages()
  return (
    <html lang="ja">
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
