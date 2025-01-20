import "./globals.css";
import type { Metadata } from "next";
import { Klee_One } from "next/font/google";
import TopBar from "@/components/ui/TopBar";

const kleeOne = Klee_One({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-klee-one",
});

export const metadata: Metadata = {
  title: "Japanese Ryokan Experience",
  description: "Discover the tranquility and beauty of traditional Japanese inns",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={kleeOne.variable}>
      <body className="font-klee min-h-screen flex flex-col">
        <header className="bg-white shadow-sm">
          <TopBar />
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-600">
                Experience the tranquility and beauty of traditional Japanese hospitality at our ryokan.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Rooms & Rates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Amenities
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Location
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-600">123 Sakura Street, Kyoto, Japan</p>
              <p className="text-gray-600">Phone: +81 123-456-7890</p>
              <p className="text-gray-600">Email: info@ryokan.com</p>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600">
            <p>&copy; 2023 Japanese Ryokan Experience. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
