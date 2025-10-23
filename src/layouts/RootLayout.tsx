import { Outlet, ScrollRestoration } from "react-router";
import { useSidebarStore } from "@/components/sidebar/themeStore";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import FilterModal from "@/components/filter/FilterModal";

export default function RootLayout() {
  const { isOpen } = useSidebarStore();

  return (
    <>
      <ScrollRestoration />

      <Sidebar />

      <main
        className={`relative bg-[#f6f6fa] flex flex-col min-h-[100vh] ${
          isOpen ? "ml-[80px]" : "ml-[250px]"
        }`}
      >
        <Navbar />

        <div className="p-5 flex-1">
          <Outlet />
        </div>

        <Footer />
          <FilterModal />
      </main>
    </>
  );
}
