"use client";

import {useLanguage} from "@/components/LanguageProvider";

export default function Dashboard(){
 const {language}=useLanguage();

 const modules=language==="MY"
 ? [
 ["Arkitek Pembelajaran","Mereka bentuk pengalaman pembelajaran berstruktur."],
 ["Pembelajaran Adaptif","Menyediakan aktiviti mengikut tahap murid."],
 ["Studio Sumber","Menghasilkan bahan pengajaran."],
 ["Mentor Refleksi","Menambah baik amalan pengajaran."]
 ]
 : [
 ["Lesson Architect","Design structured learning experiences."],
 ["Adaptive Learning","Create level-based activities."],
 ["Resource Studio","Generate teaching resources."],
 ["Reflection Mentor","Improve teaching practice."]
 ];

 return (
 <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-8 py-12">
 <h1 className="text-4xl font-bold">
 {language==="MY"?"Selamat Datang, Pendidik Masa Hadapan 👋":"Welcome, Future Educator 👋"}
 </h1>
 <p className="mt-3 text-slate-600">
 {language==="MY"?"Ruang Kerja Pengajaran Pintar EFTA":"EFTA Intelligent Teaching Workspace"}
 </p>

 <div className="grid md:grid-cols-2 gap-6 mt-10">
 {modules.map(m=>(
 <div key={m[0]} className="rounded-3xl border bg-white p-7 shadow-lg hover:-translate-y-1 transition">
 <h2 className="text-xl font-bold">{m[0]}</h2>
 <p className="mt-3 text-slate-600">{m[1]}</p>
 <button className="mt-6 rounded-xl bg-blue-700 px-5 py-3 text-white">
 {language==="MY"?"Buka Modul":"Open Module"}
 </button>
 </div>
 ))}
 </div>
 </main>
 );
}
