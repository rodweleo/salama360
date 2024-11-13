"use server"

import { createClient } from "@/utils/supabase/server"
// import { revalidatePath } from "next/cache";
import { cookies } from "next/headers"
// import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const supabase = await createClient()
  
  const cookie = cookies();

  const email = formData.get("email") as string
  const pass = formData.get("pass") as string

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: pass
  })

  
  if (error) {
    return {
      success: false,
      message: error.message
    }
  }

  //get the user role

  async function getUserRole(userId: string){
    const { data, error } = await supabase.from("slm_usr_members").select("*").eq("slm_usr_id", userId).limit(1).single();

    if(error){
      return {
        role: null,
        message: error.message
      }
    }

    const {roles} = data;

    return {
      roles
    }
  }

  const { roles } = await getUserRole(data.user.id);
  
  if (roles && roles.includes("admin")) {

    // Set cookie using the `Set-Cookie` header response
    cookie.set({
      name: "role",
      value: "admin",
      path: "/app/account/admin",
      httpOnly: true,
    });


  return {
    success: true,
    message: `Welcome back ${email}`
  }

}
}

export async function registerUser() {

  return {
    success: false,
    message: "Something went wrong"
  }

}

export async function resetPasswordAction(){

  return {
    success: false,
    message: "Something is happening"
  }
}

  export async function signOutAction() {
    const supabase = await createClient();

    // Perform sign-out
    const { error } = await supabase.auth.signOut();

    if (error) {
      return {
        success: false,
        message: error.message,
      };
    }

   
    const cookieStore = cookies();
    cookieStore.delete("role"); 
    
    return {
      success: true,
      message: "You've been logged out",
    }
  }