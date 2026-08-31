"use client";

import {useState} from "react";

export default function LanguageToggle(){

const [lang,setLang]=useState("MY");

return (
<button
onClick={()=>setLang(lang==="MY"?"ENG":"MY")}
className="rounded-xl border px-4 py-2 bg-white"
>
{lang==="MY" ? "MY 🇲🇾" : "ENG 🇬🇧"}
</button>
);

}
