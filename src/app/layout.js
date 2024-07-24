import './globals.css'
import { Inter } from 'next/font/google'
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
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <script>
                    {`(adsbygoogle = window.adsbygoogle || []).push({
                        google_ad_client: "ca-pub-3682138305573283",
                        enable_page_level_ads: true
                    });`}
                </script>
            </Head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
