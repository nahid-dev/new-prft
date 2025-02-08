import Navbar from "@/components/shared/Navbar";
import "./globals.css";

export const metadata = {
  title: "Portfolio-Khalek",
  description:
    "A personal portfolio website showcasing the projects and skills of Khalek.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
