"use client";
import { NavContextProvider } from "@/contexts/NavContext";
import Header from "../../components/Header/Header";
import { usePathname  } from "next/navigation";

export default function RootLayout({ children }) {

  const pathname = usePathname()

  return (
    <html lang="pt-br">
      <body>
        <NavContextProvider pathname={pathname}>
          <Header />
          {children}
        </NavContextProvider>
      </body>
    </html>
  );
}
