import React from 'react'
import { ProfileUserData } from '../../Components/ProfileSetting/ProfileUserData'
import PostsCategories from '../../Components/ProfileSetting/PostsCategories'

const Profile = () => {
    return (
        <div className='px-20'>
            <div className=''>
                <ProfileUserData />
            </div>
            <div>
                <PostsCategories />
            </div>
        </div>
    )
}

export default Profile