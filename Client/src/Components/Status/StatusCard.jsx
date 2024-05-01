import React from 'react'

export default function StatusCard({ id, name, profile, setHome }) {
    return (
        <div className='ContactCard' onClick={() => { setHome(id) }}>
            <div className='w-[15%] h-[100%]'>
                <img src={profile} alt="ProfileImg" className='rounded-full w-[100%] h-[100%]' />
            </div>
            <div className="w-[60%] flex flex-col">
                <span className='text-lg text-white font-Nunito'>{name}</span>
            </div>
            <span className='w-[20%] text-sm text-[#7f7f7f]'>30 mins ago</span>
        </div>
    )
}
