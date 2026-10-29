import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata = { title: "CampusCart" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <CartProvider>
          <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}