"use client";

import {useState} from "react";
import {createClient} from "@/lib/supabase/client";
import {useRouter} from "next/navigation";

export default function RegisterPage(){

const router = useRouter();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [loading,setLoading] = useState(false);

async function register(){

setLoading(true);

const supabase=createClient();

const {data,error}=await supabase.auth.signUp({
 email,
 password
});

if(error){
 alert(error.message);
 setLoading(false);
 return;
}

if(data.user){

const {error:profileError}=await supabase
.from("profiles")
.insert({
 id:data.user.id,
 full_name:name,
 role:"siswa_guru",
 language:"MY"
});

if(profileError){
 alert(profileError.message);
 setLoading(false);
 return;
}

}

alert("Pendaftaran berjaya. Sila log masuk.");
router.push("/auth/login");

}

return (
<main className="min-h-screen flex items-center justify-center">
<div className="bg-white border rounded-2xl p-8 w-full max-w-md">

<h1 className="text-3xl font-bold">
Daftar EFTA
</h1>

<input className="border p-3 w-full mt-5 rounded"
placeholder="Nama penuh"
onChange={e=>setName(e.target.value)}
/>

<input className="border p-3 w-full mt-3 rounded"
placeholder="E-mel"
onChange={e=>setEmail(e.target.value)}
/>

<input className="border p-3 w-full mt-3 rounded"
placeholder="Kata laluan"
type="password"
onChange={e=>setPassword(e.target.value)}
/>

<button
onClick={register}
disabled={loading}
className="mt-5 bg-blue-600 text-white px-5 py-3 rounded-xl w-full"
>
{loading ? "Mendaftar..." : "Daftar Akaun"}
</button>

</div>
</main>
)

}
