import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const scifiReg = localFont({
  src: "../../public/Fonts/megatrans-font/MegatransdemoRegular-8M9B0.otf",
  variable: "--font-scifi-reg",
  weight: "100 900",
})

const scifiHeader = localFont({
  src: "../../public/Fonts/paladins-font/Paladins3D-8OaYZ.otf",
  variable: "--font-scifi-header",
  weight: "600 900"
})

export const metadata = {
  title: "Angelo Econ | Junior Web, Mobile Developer & Designer",
  description: "I need to grow and experience",
  icons: {
    icon: '/main-logo.svg',
    apple: '/main-logo.svg',
    other: [
      { rel: 'icon', url: '/main-logo.svg', sizes: '32x32' }
    ]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${scifiReg.variable} ${scifiHeader.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
