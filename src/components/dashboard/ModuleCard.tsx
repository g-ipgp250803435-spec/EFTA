export default function ModuleCard({title,description}:{title:string,description:string}){
 return (
  <div className="rounded-2xl bg-white border p-6 shadow-sm hover:shadow-md transition">
   <h3 className="text-xl font-bold">{title}</h3>
   <p className="mt-3 text-slate-600">{description}</p>
   <button className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-white">
    Open Module
   </button>
  </div>
 )
}
