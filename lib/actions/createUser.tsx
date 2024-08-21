"use server"
import prisma  from '@/db';
import { getServerSession } from 'next-auth';
import bcrypt from 'bcrypt';
import { authOptions } from '../auth';


interface CreateUser {
    firstName : string;
    lastName : string ;
    email : string ;
    password : string;

}
export async function CreateUser({ firstName, lastName, email, password  }: CreateUser): Promise<{ message: string }> {
    const session = await getServerSession(authOptions)
    const sessionUser = session?.user?.email
    
    const user = await prisma.user.findUnique({
        where : {
            email : sessionUser || ""
        }
    })
    if(user){
        return {
            message : "" ,
        }
    }
    const hashedPassword = await bcrypt.hash(password, 10); 
    
    const res = await prisma.user.create({
        data : {
                firstName ,
                lastName ,
                email ,
                password : hashedPassword 
            }
        })

        if(!res){
            return {
                message : "failed",
            }
        }
    
    return { message: 'User created successfully'};

}