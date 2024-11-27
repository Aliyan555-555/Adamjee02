
import "./globals.css";
import Header from "@/src/components/client/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen relative overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  );
}
