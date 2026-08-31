import LanguageToggle from "@/components/LanguageToggle";

export default function Navbar(){

return (
<nav className="border-b bg-white px-8 py-4 flex justify-between items-center">

<div>
<div className="font-bold text-xl text-blue-600">
EFTA
</div>
<div className="text-xs text-slate-500">
Pembantu Guru Masa Hadapan Berasaskan AI
</div>
</div>

<LanguageToggle />

</nav>
);
}
