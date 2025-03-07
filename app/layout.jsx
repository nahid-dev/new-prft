import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import ClientWrapper from "./components/ClientWrapper";
import InfinityMovingSection from "@/components/InfinityMovingSection";
import Toast from "@/components/Toaster";

export const metadata = {
  title: "Portfolio-Khalek",
  description:
    "A personal portfolio website showcasing the projects and skills of Khalek.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <ClientWrapper>
          <Toast />
          <Navbar />
          <div>{children}</div>
          <InfinityMovingSection />
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
