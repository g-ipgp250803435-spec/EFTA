import ModuleCard from "@/components/dashboard/ModuleCard";
import StatCard from "@/components/dashboard/StatCard";

export default function Dashboard(){
 return (
  <main className="px-8 py-10">
   <h1 className="text-4xl font-bold">Welcome, Future Educator 👋</h1>
   <p className="mt-2 text-slate-600">Your AI-powered pedagogical workspace.</p>

   <div className="mt-8 grid md:grid-cols-3 gap-5">
    <StatCard title="Lessons Created" value="0"/>
    <StatCard title="Resources" value="0"/>
    <StatCard title="Reflections" value="0"/>
   </div>

   <h2 className="mt-12 text-2xl font-bold">Teaching Studio</h2>

   <div className="mt-5 grid md:grid-cols-2 gap-5">
    <ModuleCard title="Lesson Architect" description="Design structured learning experiences."/>
    <ModuleCard title="Adaptive Learning" description="Create differentiated activities."/>
    <ModuleCard title="Resource Studio" description="Generate teaching resources."/>
    <ModuleCard title="Reflection Mentor" description="Improve teaching practice."/>
   </div>
  </main>
 )
}
