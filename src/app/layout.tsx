import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

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
    <html lang="pt-BR" className={poppins.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
