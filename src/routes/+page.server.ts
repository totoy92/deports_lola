import type { User } from "$lib/server/database/schema";
import { redirect } from "@sveltejs/kit";


export function load({locals} : {locals: {user: User}}){

    if(!locals.user){
         redirect(307,'/login')
    }

}
