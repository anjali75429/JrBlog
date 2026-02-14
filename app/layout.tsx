import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "JrBlog",
  description: "Simple Blog Application built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <Header />
        <main className="max-w-6xl mx-auto p-6 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
