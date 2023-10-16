import React, { useState } from 'react'
import { AiOutlineTable } from 'react-icons/ai'
import { BiBookmark } from 'react-icons/bi'
import UserPosts from './UserPosts'

const PostsCategories = () => {

    const [activeTab,setActiveTab]=useState()

    const tabs=[
        {
            tab:"Дописи",
            icon:<AiOutlineTable></AiOutlineTable>,
            activeTab:""
        },
        {
            tab:"Збережено",
            icon:<BiBookmark></BiBookmark>,
        }
    ]
    
    return (
        <div>
            <div className='flex space-x-14 border-t relative'>
                {tabs.map((item)=>(
                <div onClick={()=>setActiveTab(item.tab)} className={`${activeTab===item.tab? "border-t border-black":"opacity-60"} flex imems-center cursor-pointer py-2 text-sm`}>
                <p>
                    {item.icon}
                </p>
                <p className='ml-1'>
                    {item.tab}
                </p>
            </div>
            ))}
            </div>
            <div>
                <div className='flex flex-wrap'>
                    {[1].map((item)=><UserPosts />)}
                </div>
            </div>
        </div>
    )
}

export default PostsCategories