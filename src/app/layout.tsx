import { Fragment_Mono, Rubik } from "next/font/google";
import Navbar from "@/components/navbar";

const rubik = Rubik({ subsets: ["latin"] });
const fragment = Fragment_Mono({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Donkeyboard",
  description: "Test your type speed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fragment.className}>{children}</body>
    </html>
  );
}
