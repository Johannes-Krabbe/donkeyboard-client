"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Donkeyboard",
  description: "Test your type speed",
};

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-rubik: ${rubik.style.fontFamily};
          }
        `}
      </style>

      <html lang="en">
        <body className={rubik.className}>
          <ChakraProvider>{children}</ChakraProvider>
        </body>
      </html>
    </>
  );
}
