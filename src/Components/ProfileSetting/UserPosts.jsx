import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import './UserPost.css'

const UserPosts = () => {
    return (
        <div className='p-2'>
            <div className='post w-60 h-60'>
                <img className='cursor-pointer' src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                <div className='overlay'>
                    <div className='overlay-text flex justify-between'>
                        <div>
                            <AiFillHeart></AiFillHeart> <span>43</span>
                        </div>
                        <div>
                            <FaComment></FaComment> <span>8</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPosts