import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import {LanguageProvider} from "@/components/LanguageProvider";

export const metadata={
 title:"EFTA | EduAI Future Teacher Assistant",
 description:"AI pedagogical assistant for future educators"
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return (
 <html lang="ms">
 <body>
 <LanguageProvider>
 <Navbar/>
 {children}
 </LanguageProvider>
 </body>
 </html>
 );
}
