import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import "@/styles/global.scss";
import { Inter, Raleway, DM_Serif_Display } from "next/font/google";
import { Toaster } from "@/components/ui/toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["100", "200", "400", "500", "600", "900"],
});
const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dmSerifDisplay",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-[#FFFDFD] text-text antialiased",
        inter.variable,
        raleway.variable,
        dmSerifDisplay.variable
      )}
    >
      <body className="min-h-screen font-raleway">
        <Toaster position="top-right" />
        <main>{children}</main>
      </body>
    </html>
  );
}
