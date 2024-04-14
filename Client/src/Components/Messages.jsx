import React, { useState } from 'react'
import Chats from './Chats'
import ChatBox from './ChatBox'
import Home from './Home'

export default function Messages() {
    const [id,setid] = useState(-1)
    console.log(id)

    return (
        <div className='Messages'>
            <Chats setHome={setid}/>
            {id>-1?<ChatBox id={id}/>:<Home/>}
        </div>
    )
}
