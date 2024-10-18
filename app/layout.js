// context
import { AppProvider } from "./context";
// components
import Header from "@/components/appLayout/header/Header";
import Footer from "@/components/appLayout/footer/Footer";
// style
import "./globals.css";
// toast
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Daily Path",
  description: "Daily Path is a personal productivity app designed to help users organize their tasks and reflect on their daily experiences. The app combines a task manager with a diary feature, allowing users to stay on top of their to-do list while keeping track of their thoughts and emotions.",
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en" data-theme="dracula">
    <html lang="en" data-theme="winter">
      <body className="flex flex-col min-h-screen">
        <AppProvider>
          <Header />

          <main className="flex-1 py-8">
            {children}
          </main>
          <Toaster />

          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
