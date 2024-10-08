import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./styles/font-awesome.css"
import Sidebar from "./components/Sidebar";


const rubik = localFont({
  src: "./fonts/RubikVF.ttf",
  variable: "--font-rubik",
  weight: "300 900",
})

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Wagner's Portfolio",
  description: "Page designed to promote Wagner Pires Ferreira Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} antialiased`}
      >
        <Sidebar></Sidebar>
        {children}
      </body>
    </html>
  );
}
