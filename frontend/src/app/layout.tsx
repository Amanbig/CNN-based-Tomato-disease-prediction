import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";


export const metadata: Metadata = {
  title: "CNN Based Tomato Disease Detection",
  description: "This is an AI based Tomato disease Detection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
