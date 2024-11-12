import type { Metadata } from "next";
import IMB_Plex_Sans from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";


const IBMPlex = IMB_Plex_Sans({
  src: "./fonts/IBMPlexSans-Regular.ttf",
  variable: "--font-ibm-plex",
  weight: "400 500 600 700",
});


export const metadata: Metadata = {
  title: "imagify",
  description: "AI-Image Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {colorPrimary: '#624cf5'}
    }}>
<html lang="en">
      <body
        className={cn("font-IBMPlex antialiased", IBMPlex.variable)}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
    
  );
}
