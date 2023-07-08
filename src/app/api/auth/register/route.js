import User from "@/models/User";
import connect from "@/utils/db";
import bcrpyt from "bcryptjs"
import { NextResponse } from "next/server";

export const POST = async(request) =>{
    try{
        await connect()
        const {email, fullname,password} = await request.json()
        console.log(email,fullname,password)
        const hash = await bcrpyt.hash(password,5)
        const newUser = new User({
            email:email,
            fullname:fullname,
            password:hash
        })
        await newUser.save()
        return new NextResponse(JSON.stringify(newUser),{status:201});
    }catch(err){
        return new NextResponse(err,{status:500});
    }
}