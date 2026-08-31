'use client';

import {useState} from 'react';
import {createClient} from '@/lib/supabase/client';

export default function LoginPage(){

const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

async function login(){
 const supabase=createClient();
 await supabase.auth.signInWithPassword({
  email,
  password
 });
}

return (
<main className="min-h-screen flex items-center justify-center">
<div className="bg-white border rounded-2xl p-8 w-full max-w-md">

<h1 className="text-2xl font-bold">
Log Masuk EFTA
</h1>

<input className="border p-3 w-full mt-5"
placeholder="Emel"
onChange={e=>setEmail(e.target.value)}
/>

<input className="border p-3 w-full mt-3"
placeholder="Kata Laluan"
type="password"
onChange={e=>setPassword(e.target.value)}
/>

<button
className="mt-5 bg-blue-600 text-white px-5 py-3 rounded-xl"
onClick={login}
>
Masuk
</button>

</div>
</main>
)
}
