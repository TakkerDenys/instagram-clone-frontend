import React, { useState } from 'react'
import { BsBookmark, BsBookmarkFill, BsThreeDots } from 'react-icons/bs'
import './MainPost.css'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'

const MainPosts = () => {
    
    const [showDelete, setShowDelete]=useState(false)
    const [likedPost, setLikedPost]=useState(false)
    const [savedPost, setSavedPost]=useState(false)

    const itemSavedPost=()=>(
        setSavedPost(!savedPost)
    )

    const itemLikedPost=()=>(
        setLikedPost(!likedPost)
    )

    const itemClick=()=>{
        setShowDelete(!showDelete)
    }

    return (
        <div>
            <div className='border rounded-md w-full'>
                <div className='flex justify-between items-center w-full py-4 px-5'>
                    <div className='flex items-center'>
                        <img className='h-12 w-12 rounded-full' src="https://i.pinimg.com/736x/1c/f4/8f/1cf48f79972f9040b5ab81433f897b2b.jpg" alt="" />
                        <div className='pl-2'> 
                            <p className='font-semibold text-sm'>username</p>
                            <p className='font-thin text-sm'>location</p>
                        </div>
                    </div>
                    <div className='delete'>
                        <BsThreeDots className='dots' onClick={itemClick}/>
                        <div className='delete-post'>
                            { showDelete && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>
                                Видалити
                            </p>}
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <img className='w-full' src="https://i.pinimg.com/736x/1c/f4/8f/1cf48f79972f9040b5ab81433f897b2b.jpg" alt="" />
                </div>
                <div className='flex justify-between items-center w-full px-5 py-4'>
                    <div className='flex items-center space-x-2'>
                        {likedPost ? <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-600' onClick={itemLikedPost}/>:<AiOutlineHeart className='text-2xl cursor-pointer' onClick={itemLikedPost}/>}
                        <FaRegComment className='text-xl hover:opacity-50 cursor-pointer' />
                        <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer' />
                    </div>
                    <div className='cursor-pointer'>
                    {savedPost ? <BsBookmarkFill className='text-xl hover:opacity-50 cursor-pointer' />:<BsBookmark className='text-xl hover:opacity-50 cursor-pointer' />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPosts