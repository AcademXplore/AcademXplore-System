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
    <html lang="pt-br">
        <body style={{backgroundColor: "#F3F3F3"}}>
          <LayoutAdmin>
            <NavContextProvider pathname={pathname}>
              <QueryClientProvider client={client}>
                <Header />
                {children}
              </QueryClientProvider>
            </NavContextProvider>
          </LayoutAdmin>
        </body>
      </html>
  );
}
