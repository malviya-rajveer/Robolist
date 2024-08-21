"use client"
import { signOut } from "next-auth/react";
import { Button } from "./button";

export function AppBar(){
    return <div className="flex items-center gap-4 pl-36 justify-end ">
            <Button onclick={()=>{}} href ={"/signup"}>signup</Button>
            <Button onclick={async()=>{await signOut({redirect : false})}} href ={"/"}>signout</Button>
        </div>
}