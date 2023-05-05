import React from 'react'
import Style from './UserProfile.module.css'
const UserProfile = ({ profileInfo, showCard, hideCard }) => {
    return (
        <div className={Style.userProfile} onMouseEnter={showCard} onMouseLeave={hideCard}>
            <img src={profileInfo.profileImg} alt="img" width={50} />
            <div className={Style.userInfo}>
                <span>{profileInfo.name}</span>
                <span>{profileInfo.email}</span>
            </div>
        </div>
    )
}

export default UserProfile;