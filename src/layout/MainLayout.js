import Header from "@/components/Header";
import Footer from "@/components/FooterOne";
export default function MainLayout({ children }) {
  return (
    <div className="min-h-full">
      <Header />
      <main>
        <div className="w-full  ">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
