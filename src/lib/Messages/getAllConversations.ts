'use server'

import { auth } from "@clerk/nextjs";
import prisma_db from "../../../prisma/db";
import { Conversation } from "@prisma/client";
import getCurrentPrismaUser from "../db_actions/getCurrentPrismaUser";


// This function returns all conversations that are associated with the current user


export async function getAllConversations() {
    try {


        const { userId }: { userId: string | null } = auth();
        if (userId === null) {
            throw new Error("Something went wrong authenticating");
        }
        const currentUser = await getCurrentPrismaUser()
        if (currentUser === undefined) {
            throw new Error("Something went wrong authenticating");
        }

       const conversationsByUser = await prisma_db.conversation.findMany({
        where: {
            users: {
                some: { id: userId }
            }
        },
        include: {
            messages: true,
            users: true
        }
       })
        
        return conversationsByUser
    }
    catch (error: any) {
        throw ('getAllConversations: unable to get all conversations')
    }
}