"use client";

import LanguageToggle from "@/components/LanguageToggle";
import {useLanguage} from "@/components/LanguageProvider";

export default function Navbar(){
 const {language}=useLanguage();

 return (
 <nav className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur px-8 py-4 flex justify-between items-center">
 <div>
  <div className="font-bold text-2xl text-blue-700">EFTA</div>
  <div className="text-sm text-slate-500">
  {language==="MY" ? "Pembantu Guru Masa Hadapan Berasaskan AI" : "AI Future Teacher Assistant"}
  </div>
 </div>
 <LanguageToggle/>
 </nav>
 );
}
