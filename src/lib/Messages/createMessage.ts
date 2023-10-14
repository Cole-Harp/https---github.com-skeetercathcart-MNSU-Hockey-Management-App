"use server"

import { useRouter } from "next/navigation";
import prisma_db from "../../../prisma/db";
import getCurrentUserId from "../db_actions/getCurrentUserId";


// This function creates a new message given the body of the message, and the conversation to add it to. It then updates the
// conversation by connecting the newly created message to the conversation

export async function createMessage(message: string, conversationId: string) {
    try {
        

        const userId = await getCurrentUserId()
        if(userId === undefined)
        {
            throw new Error('createMessage: invalid user')
        }


        const newMessage = await prisma_db.message.create({
            data: {
               body: message,
               userId: userId,
               conversation: {
                connect: {
                    id: conversationId
                }
               }
               
            }
         })

         const updatedConversation = await prisma_db.conversation.update({
            where: {
                id: conversationId
            },
            data: {
                messages: {
                    connect: {
                        id: newMessage.id
                    }
                }
            },
            include: {
                messages: true
            }
        })
         return newMessage
        }
    catch (error: any) {
        throw (error)
    }
}