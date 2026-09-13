import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RouteLoading from "./RouteLoading";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <RouteLoading />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}