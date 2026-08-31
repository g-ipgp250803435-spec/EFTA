import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
 title:"EFTA | EduAI Future Teacher Assistant",
 description:"Human-centred AI platform for future educators"
};

export default function RootLayout({children}:{children:React.ReactNode}) {
 return (
  <html lang="en">
   <body>
    <Navbar />
    {children}
   </body>
  </html>
 );
}
