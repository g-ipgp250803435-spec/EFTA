'use client';

import {createClient} from '@/lib/supabase/client';

export default function LogoutButton(){

async function logout(){
const supabase=createClient();
await supabase.auth.signOut();
}

return (
<button
onClick={logout}
className="border rounded-lg px-4 py-2"
>
Log Keluar
</button>
)

}
