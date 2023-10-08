'use client'

import useConversation from "@/app/hooks/useConversation"
import { FieldValues, SubmitHandler, useForm,  } from 'react-hook-form'
import axios from 'axios'
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2"
import MessageInput2 from "./MessageInput2"


const Form = () => {
    const { conversationId } = useConversation();

    const {register, handleSubmit, setValue, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            message: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setValue('message', '', { shouldValidate: true})
        axios.post('/api/messages', {
            ...data, 
            conversationId
        })
    }

    return (
        <div className = 'py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full'>
            <HiPhoto size = {30} className = 'text-sky-500' />
            <form onSubmit = {handleSubmit(onSubmit)} className = 'flex items-center gap-2 lg:gap-4 w-full'>
                <MessageInput2 id = 'message' register = {register} errors = {errors} required placeholder = 'Type your message here..."'></MessageInput2>
                <button type = 'submit' className = 'rounded-full p-2 bg-sky-500 cursor-pointer hover:bg-sky-600 transition'>
                    <HiPaperAirplane size = {18} className = 'text-white'/>
                </button>
            </form>
        </div>
    )
}

export default Form