export default function StatCard({title,value}:{title:string,value:string}){
 return (
  <div className="rounded-2xl bg-white border p-6 shadow-sm">
   <p className="text-sm text-slate-500">{title}</p>
   <p className="mt-3 text-3xl font-bold">{value}</p>
  </div>
 )
}
