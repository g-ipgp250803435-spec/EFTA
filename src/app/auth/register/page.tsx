"use client";


import {useState} from "react";
import {createClient} from "@/lib/supabase/client";
import {useRouter} from "next/navigation";


export default function Login(){

const router=useRouter();


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");



async function login(){


const supabase=createClient();



const {

error

}=await supabase.auth.signInWithPassword({

email,

password

});



if(error){

alert(error.message);

return;

}



router.push("/dashboard");


}




return (

<div className="
min-h-screen
flex
items-center
justify-center
">


<div className="
bg-white
border
rounded-2xl
p-8
max-w-md
w-full
">


<h1 className="
text-3xl
font-bold
">

Log Masuk EFTA

</h1>


<input

className="
border
p-3
w-full
mt-5
"

placeholder="Emel"

onChange={
e=>setEmail(e.target.value)
}

/>


<input

className="
border
p-3
w-full
mt-3
"

type="password"

placeholder="Kata laluan"

onChange={
e=>setPassword(e.target.value)
}

/>



<button

onClick={login}

className="
mt-5
bg-blue-600
text-white
px-5
py-3
rounded-xl
w-full
"

>

Masuk

</button>


</div>


</div>

)


}
