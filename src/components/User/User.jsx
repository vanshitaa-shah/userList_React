import React from 'react'
import UserProfile from '../UserProfile/UserProfile'
import UserStyle from './User.module.css'
import { Trash2, Lock } from 'react-feather'
import { hoverActions} from '../../store/hoverSlice'
import { cardActions} from '../../store/cardSlice'
import { useDispatch , useSelector} from 'react-redux'
import { useRef } from 'react'

const User = ({ userInfo }) => {
    const dispatch = useDispatch();
    const statusValue=useRef();

    // Logic for showing and hiding of the card
    const showCardHandler = () => {
        if(statusValue.current){
            userInfo={...userInfo,status:statusValue.current.value}
        }
        dispatch(hoverActions.toggleCard())
        dispatch(cardActions.showCard(userInfo))
    }
    const hideCardHandler = () => {
        dispatch(hoverActions.toggleCard())
    }

    const toggleStatus=(e)=>{
        dispatch(cardActions.toggleStatus(e.target.value))
    }

    return (
        <tr>
            <td colSpan={2}>
                <UserProfile profileInfo={userInfo} showCard={showCardHandler} hideCard={hideCardHandler} />
            </td>
            {
                userInfo.access === 'owner'
                    ? <>
                        <td id={UserStyle.active} >Active</td>
                        <td id={UserStyle.owner}>Owner</td>
                        <td><Lock /></td>
                    </>
                    : <>
                        <td>
                            <select name="status" defaultValue={userInfo.status} onChange={toggleStatus} ref={statusValue}>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </td>
                        <td>
                            <select name="access" defaultValue={userInfo.access} >
                                <option value="manager">Manager</option>
                                <option value="read">Read</option>
                            </select>
                        </td>
                        <td>
                            <Trash2 />
                        </td>
                    </>}

        </tr>
    )
}

export default User;