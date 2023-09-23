"use client";
import LayoutAdmin from "@/components/LayoutAdmin"
import { NavContextProvider } from "@/contexts/NavContext";
import Header from "../../components/Header/Header";
import { usePathname  } from "next/navigation";

export default function RootLayout({ children }) {

  const pathname = usePathname()

  return (
    <html lang="pt-br">
        <body>
          <LayoutAdmin>
            <NavContextProvider pathname={pathname}>
              <Header />
              {children}
            </NavContextProvider>
          </LayoutAdmin>
        </body>
      </html>
  );
}
