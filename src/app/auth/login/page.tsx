"use client";

import {useState} from "react";
import {createClient} from "@/lib/supabase/client";
import {useRouter} from "next/navigation";

export default function LoginPage(){

const router=useRouter();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [loading,setLoading]=useState(false);

async function login(){

setLoading(true);

const supabase=createClient();

const {error}=await supabase.auth.signInWithPassword({
 email,
 password
});

if(error){
 alert(error.message);
 setLoading(false);
 return;
}

router.push("/dashboard");
router.refresh();

}

return (
<main className="min-h-screen flex items-center justify-center">

<div className="bg-white border rounded-2xl p-8 w-full max-w-md">

<h1 className="text-3xl font-bold">
Log Masuk EFTA
</h1>

<input className="border p-3 w-full mt-5 rounded"
placeholder="E-mel"
onChange={e=>setEmail(e.target.value)}
/>

<input className="border p-3 w-full mt-3 rounded"
placeholder="Kata laluan"
type="password"
onChange={e=>setPassword(e.target.value)}
/>

<button
onClick={login}
disabled={loading}
className="mt-5 bg-blue-600 text-white px-5 py-3 rounded-xl w-full"
>
{loading ? "Memproses..." : "Masuk"}
</button>

</div>

</main>
)

}
