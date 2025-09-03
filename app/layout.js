import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Villa Amadaha",
  description: "Luxury Villa Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
