"use client";
import LayoutAdmin from "@/components/LayoutAdmin"
import { NavContextProvider } from "@/contexts/NavContext";
import Header from "../../components/Header/Header";
import { usePathname  } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Footer } from "@/components/Footer/Footer"

export default function RootLayout({ children }) {
  const client = new QueryClient()
  const pathname = usePathname()

  return (
    <LayoutAdmin>
      <NavContextProvider pathname={pathname}>
        <QueryClientProvider client={client}>
          <section className="min-vh-100 d-flex flex-column position-relative" style={{backgroundColor: "#F3F3F3"}}>
            <Header />
            {children}
            <br/>
            {/* {pathname != "/notifications" && <Footer/>} */}
          </section>
        </QueryClientProvider>
      </NavContextProvider>
    </LayoutAdmin>
  );
}
