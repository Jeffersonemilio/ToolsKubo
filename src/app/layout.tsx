import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { FB_PIXEL_ID } from "@/lib/facebook-pixel"
import FacebookPixel from "@/components/FacebookPixel"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Quiz de Análise de Times Comerciais | Kubo",
  description: "Avalie a maturidade do seu time comercial e descubra oportunidades de melhoria para impulsionar seus resultados.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={poppins.className} suppressHydrationWarning>
      <head>
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <FacebookPixel />
        {children}
      </body>
    </html>
  )
}
