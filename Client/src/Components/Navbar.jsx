import React from 'react'
import { Link } from 'react-router-dom';
import { BiMessageRoundedDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { FiArchive, FiPhone } from "react-icons/fi";
import { IoSettingsOutline, IoStarOutline } from "react-icons/io5";
import { LuOrbit } from "react-icons/lu";

export default function Navbar() {
  return (
    <div className='Nav'>
      <div className="ChatOps">
        <div className='Header'><FaWhatsapp className='text-2xl' /> Whatsapp...</div>
        <Link to="/"><BiMessageRoundedDetail className='Ico text-2xl' /></Link>
        <Link to="/call"><FiPhone className='Ico' /></Link>
        <Link to="/status"><LuOrbit className='Ico' /></Link>
      </div>
      <div className="Settings">
        <IoStarOutline className='Ico' />
        <FiArchive className='Ico' />
        <IoSettingsOutline className='Ico' />
        <CgProfile className='Ico text-2xl' />
      </div>
    </div>
  )
}
