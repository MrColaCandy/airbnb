import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/registerModal/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

const font = Nunito({
  subsets: ["latin"],
});
export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <RegisterModal />
        <ToasterProvider />
        <Navbar />
      </body>
    </html>
  );
}
