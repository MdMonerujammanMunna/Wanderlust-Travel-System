const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Nunito } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/Navbar";
import FooterPage from "@/components/Footer";

const NunitoSans = Nunito({
  subsets: ["latin"],
});



export const metadata = {
  title: "Wanderlust Travel",
  description: "This is a Travel websit for people",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${NunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col container mx-auto">
        <NavigationBar />
        <main>{children}</main>
        <FooterPage />
      </body>
    </html>
  );
}
