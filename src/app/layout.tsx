import type { Metadata } from "next";
import { IBM_Plex_Mono, Crimson_Text } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: '400',
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"]
})

const crimsonText = Crimson_Text({
  weight: '400',
  variable: "--font-crimson-text",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Jeff Liu's Website",
  description: "Personal Portfolio website created using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${crimsonText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
