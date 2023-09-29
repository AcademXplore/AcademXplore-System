"use client";
import LayoutAdmin from "@/components/LayoutAdmin"
import { NavContextProvider } from "@/contexts/NavContext";
import Header from "../../components/Header/Header";
import { usePathname  } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export default function RootLayout({ children }) {
  const client = new QueryClient()
  const pathname = usePathname()

  return (
    <LayoutAdmin>
      <NavContextProvider pathname={pathname}>

        <QueryClientProvider client={client}>
          <section className="min-vh-100" style={{backgroundColor: "#F3F3F3"}}>
            <Header />
            {children}
          </section>
        </QueryClientProvider>
      </NavContextProvider>
    </LayoutAdmin>
  );
}
