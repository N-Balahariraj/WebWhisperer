import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
    return (
        <div className='ChatBox justify-center items-center'>
            <div className='flex flex-col justify-center items-center text-center w-[50%] h-[50%] gap-5'>
                <FaWhatsapp className='text-6xl text-[#454545]' />
                <span className='text-xl'>Web WhatsApp</span>
                <span className='text-[#7f7f7f]'>Send and receive messages without keeping your phone online.<br/>Use WhatsApp on more than 4 devices and phone at the same time.</span>
            </div>
        </div>
    )
}
