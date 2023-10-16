import React, { useState } from 'react'
import {IoReorderThreeOutline} from "react-icons/io5"
import { menu } from './SidebarSetting'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
const [activeTab, setActiveTab]=useState()
const navMenu=useNavigate();

const itemClick=(title)=>{
    setActiveTab(title)
    if(title==="Профіль користувача"){
        navMenu("/username")
    }else if(title==="Головна"){
        navMenu("/")
    }
}

    return (
        <div className='sticky top-0 h-[100vh]'>
            <div className='flex flex-col justify-between h-full px-10'>
                <div>
                <div className='pt-10'>
                    <img className='w-40' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" alt="" />
                </div>
                <div className='mt-10'>
                    {menu.map((item)=> 
                    <div onClick={()=> itemClick(item.title)} className='flex items-center mb-5 cursor-pointer text-lg'>
                    {activeTab===item.title? item.activeIcon:item.icon}
                        <p className={`${activeTab===item.title?"font-bold":"font-semibolt"}`}>{item.title}</p>
                    </div>
                    )}
                </div>
                </div>
                <div className='flex item-center cursor-pointer pb-10'>
                    <IoReorderThreeOutline className='text-2xl'/>
                    <p className='ml-5'>Більше</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar