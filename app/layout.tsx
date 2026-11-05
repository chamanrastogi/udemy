
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";


export const metadata: Metadata = {
  title: {
    default: "My Website",
    template: "%s | My Website",
  },
  description: "Welcome to my Next.js website.",
  keywords: ["Next.js", "React", "Bootstrap", "Web Development"],
  authors: [{ name: "My Website" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
