// app/client-layout.js (Client Component)
"use client";

import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function ClientLayout({ children }) {
  const pathname = usePathname();
  const noNavbarRoutes = ["/", "/404"];

  return (
    <>
      {!noNavbarRoutes.includes(pathname) && <Navbar />}
      {children}
      <ToastContainer />
      {!noNavbarRoutes.includes(pathname) && <Footer />}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default ClientLayout;