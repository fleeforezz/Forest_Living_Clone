import './globals.css'
import Header from '@/components/Header'
import localFont from 'next/font/local'

const clash = localFont({
  src: [
    {
      path: './fonts/ClashDisplay-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ClashDisplay-Medium.woff',
      weight: '500',
      style: 'medium',
    },
    {
      path: './fonts/ClashDisplay-Semibold.woff',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './fonts/ClashDisplay-Bold.woff',
      weight: '700',
      style: 'bold',
    },
  ]
})

export const metadata = {
  title: 'Forest Living',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clash.className}>
        <main className='max-w-full w-auto px-[60px] py-[20px]'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
