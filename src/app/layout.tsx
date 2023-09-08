import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./globals.css";

import { GlobalContextProvider } from "@/contexts/store";
import { NextAuthProvider } from "@/contexts/auth"
// import { SessionProvider } from "next-auth/react"

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Cart from "@/components/Cart";

export const metadata = {
  title: "Bere Bere",
  description: "Comercio de bebidas para eventos de todo tipo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <NextAuthProvider>
          {/* <SessionProvider> */}
          <GlobalContextProvider>
            <NavBar />
            <Container style={{}}>
              <Box
                maxWidth="lg"
                margin="auto"
                sx={{}}
              >
                {children}
              </Box>
            </Container>
            <Footer />
          </GlobalContextProvider>
          {/* </SessionProvider> */}
        </NextAuthProvider>
      </body>
    </html>
  );
}
