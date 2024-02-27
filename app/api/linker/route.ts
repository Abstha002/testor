import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";
import prisma from "@/prisma/client";
const createPostScheme=z.object({
    title:z.string().min(1).max(255),
    discription:z.string().min(1)
})
export async function POST(request:NextRequest){
    const body= await request.json();
    const validation=createPostScheme.safeParse(body)
    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status: 400})
    }
    const newPost=await prisma.post.create({
        data:{title:body.title,discription:body.discription}
    })
    return NextResponse.json(newPost,{status:201})
}
