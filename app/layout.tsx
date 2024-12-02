
import "./globals.css";
import Header from "@/src/components/client/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="!w-screen relative !overflow-x-hidden">
        <Header />
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
