import React from 'react'
import { useSelector } from 'react-redux'
import CardStyle from './UserCard.module.css'

const UserCard = () => {
    const showCard = useSelector(state => state.hover.isHover);
    const cardData=useSelector(state=>state.card)

    //Conditional rendering
    // Showing card only when showCard(state.hover.ishover) is true
    return (
        <>
            {showCard &&
                <div className={CardStyle.cardContainer}>
                    <div className={CardStyle.cardContent}>

                        <img src={cardData.profileImg} alt="" width={100} />
                        <span className={CardStyle.name}>{cardData.name} 
                            <sup id={cardData.status==='active'?CardStyle.active:CardStyle.inactive}>.</sup>
                        </span>
                        <span className={CardStyle.secondaryColor}>{cardData.email}</span>
                        <span>Your Plan: Standard</span>
                        <button>{cardData.status==='active'?'Active':'Inactive'} User</button>

                        <div className={CardStyle.middleSection}>
                            <span>Plan Uses</span>
                            <progress className={CardStyle.progressBar} value={49} max={100}></progress>
                        </div>

                        <div className={CardStyle.bottomSection}>
                            <div>
                                <span>2,450</span>
                                <p className={CardStyle.secondaryColor}>clicks reviewed</p>
                            </div>
                            <div>
                                <span>5,000</span>
                                <p className={CardStyle.secondaryColor}>Monthly clicks</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default UserCard