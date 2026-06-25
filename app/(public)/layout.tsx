import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function PublicLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<> <Navbar />
  <main className="max-w-7xl mx-auto px-4">
    {children}
  </main>

  <Footer />
</>


);
}
