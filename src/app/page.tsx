import Link from "next/link";

export default function Home(){

return (
<main className="min-h-screen px-8 py-24 text-center">

<h1 className="text-5xl font-bold">
EduAI Future Teacher Assistant
</h1>

<p className="mt-6 text-lg text-slate-600">
Pembantu pedagogi pintar untuk memperkasakan guru masa hadapan.
</p>

<Link
href="/dashboard"
className="inline-block mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white"
>
Masuk EFTA
</Link>

</main>
);

}
