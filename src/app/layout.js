import './globals.css'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Adsense } from '@ctrl/react-adsense'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'AI Văn bản thành Lời nói',
    description: 'Công cụ chuyển văn bản thành lời nói tài trợ bởi Chatvn.org',
}

export default function RootLayout({ children }) {
    return (
        <html lang="vi">
            <Head>
                <GoogleAnalytics gaId="G-Y2BPK6JX4E" />
                <Adsense client="ca-pub-3682138305573283" />
            </Head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
