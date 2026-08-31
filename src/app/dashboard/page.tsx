const modules=[
["Arkitek Pembelajaran","Mereka bentuk pengalaman pembelajaran berstruktur."],
["Pembelajaran Adaptif","Menyediakan aktiviti mengikut tahap murid."],
["Studio Sumber","Menghasilkan bahan pengajaran."],
["Mentor Refleksi","Menambah baik amalan pengajaran."]
];

export default function Dashboard(){

return (
<main className="px-8 py-10">

<h1 className="text-4xl font-bold">
Selamat Datang, Pendidik Masa Hadapan 👋
</h1>

<p className="mt-2 text-slate-600">
Ruang Kerja Pengajaran Pintar EFTA
</p>

<div className="grid md:grid-cols-2 gap-5 mt-10">

{modules.map((m)=>(
<div key={m[0]} className="rounded-2xl bg-white border p-6 shadow-sm">
<h2 className="font-bold text-xl">{m[0]}</h2>
<p className="mt-3 text-slate-600">{m[1]}</p>
<button className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-white">
Buka Modul
</button>
</div>
))}

</div>

</main>
);

}
