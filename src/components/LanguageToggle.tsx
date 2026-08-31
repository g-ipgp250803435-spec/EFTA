"use client";

import {useLanguage} from "./LanguageProvider";

export default function LanguageToggle(){
 const {language,setLanguage}=useLanguage();

 return (
 <button
 onClick={()=>setLanguage(language==="MY"?"ENG":"MY")}
 className="rounded-full border px-5 py-2 bg-white shadow-sm hover:shadow-md transition"
 >
 {language==="MY" ? "🇲🇾 BM" : "🇬🇧 ENG"}
 </button>
 );
}
