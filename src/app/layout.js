"use client";

import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import styles from "./global.css";

// export const metadata = {
//   title: "Test SOURAV",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const noNavbarRoutes = ["/", "/404"];
  return (
    <html lang="en">
      <head>
        <title>Test SOURAV</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Playwrite+NZ+Guides&display=swap" rel="stylesheet" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
        

      </head>
      <body>
        {!noNavbarRoutes.includes(pathname) && <Navbar />}
        {children}
        <ToastContainer />
        {!noNavbarRoutes.includes(pathname) && <Footer />}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
