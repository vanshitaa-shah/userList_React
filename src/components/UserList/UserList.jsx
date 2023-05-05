import React from 'react'
import User from '../User/User'
import ListStyle from './UserList.module.css'
import users from '../../data/userData'

const UserList = () => {
    return (
        <div className={ListStyle.listContainer}>
            <table>
                <thead>
                    <tr>
                        <th colSpan={2}>Name</th>
                        <th>Status</th>
                        <th>Access</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((userInfo) => <User key={userInfo.id} userInfo={userInfo} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserList