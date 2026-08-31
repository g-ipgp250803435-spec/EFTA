import Link from "next/link";
import {Sparkles, Brain, GraduationCap} from "lucide-react";

export default function Home(){
 return (
  <main className="min-h-screen">
   <section className="px-8 py-24 text-center">
    <div className="max-w-4xl mx-auto">
     <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700">
      <Sparkles size={18}/> Future Education AI
     </div>

     <h1 className="mt-8 text-5xl font-bold tracking-tight">
      EduAI Future Teacher Assistant
     </h1>

     <p className="mt-6 text-lg text-slate-600">
      Empowering future educators through human-centred artificial intelligence and pedagogical innovation.
     </p>

     <div className="mt-10 flex justify-center gap-4">
      <Link className="rounded-xl bg-blue-600 px-6 py-3 text-white" href="/dashboard">
       Enter EFTA
      </Link>
     </div>

     <div className="mt-16 grid md:grid-cols-3 gap-5">
      <Feature icon={<Brain/>} title="Pedagogical AI" text="AI support for teaching design."/>
      <Feature icon={<GraduationCap/>} title="Future Teacher" text="Built for educators in training."/>
      <Feature icon={<Sparkles/>} title="Innovation" text="Adaptive learning experiences."/>
     </div>
    </div>
   </section>
  </main>
 )
}

function Feature({icon,title,text}:{icon:React.ReactNode,title:string,text:string}){
 return <div className="rounded-2xl bg-white p-6 shadow-sm border">
  <div className="text-blue-600">{icon}</div>
  <h3 className="mt-4 font-bold">{title}</h3>
  <p className="mt-2 text-sm text-slate-600">{text}</p>
 </div>
}
