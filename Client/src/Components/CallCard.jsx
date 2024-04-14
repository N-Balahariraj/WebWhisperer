import React from 'react'
import { MdOutlineCallMissedOutgoing } from "react-icons/md";

export default function CallCard({ id, name, profile, setHome }) {
    return (
        <div className='ChatCard' onClick={() => { setHome(id) }}>
            <div className='w-[14%] h-[100%]'>
                <img src={profile} alt="ProfileImg" className='rounded-full w-[100%] h-[100%]' />
            </div>
            <div className="w-[65%] flex flex-col">
                <span className='text-lg text-white font-Nunito'>{name}</span>
                <div className='flex items-center gap-1 text-[#ef919b]'>
                    <i className='h-[25px] w-[25px] text-xl p-1 hover:bg-[#3a3a3a] rounded-md'><MdOutlineCallMissedOutgoing /></i>
                    <span className='text-sm'>Missed</span>
                </div>
            </div>
            <span className='w-[15%] text-sm text-[#7f7f7f]'>30 mins ago</span>
        </div>
    )
}
