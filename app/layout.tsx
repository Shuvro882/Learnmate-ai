import AuthProvider from "@/context/AuthProvider";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">

        <AuthProvider> 
          
          <Navbar />

          <main className="max-w-7xl mx-auto px-4">
            {children}
          </main>

          <Footer />

        </AuthProvider>

      </body>
    </html>
  );
}