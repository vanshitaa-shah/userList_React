import React from 'react'
import User from '../User/User'
import ListStyle from './UserList.module.css'
import ReactPaginate from 'react-paginate'
import { ArrowLeft,ArrowRight} from 'react-feather';
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/userSlice';

const UserList = () => {
    const users=useSelector(state=>state.user.users);
    const pageCount=useSelector(state=>state.user.pageCount);
    const isLoading=useSelector(state=>state.user.isLoading);
    console.log(isLoading);
    const dispatch=useDispatch();

    useEffect(()=>{
        const getUsers= async()=>{
            const res= await fetch(`https://servers-omega.vercel.app/users/p?limit=7&page=${pageCount}`);
            const data=await res.json();
            dispatch(userActions.toggleLoading());
            dispatch(userActions.addUsers(data.users))
        };
        getUsers();
    },[pageCount])

    const pageChangeHandler=(data)=>{
        dispatch(userActions.pageChangeHandler(data.selected))
    }
    return (
        isLoading ? 'Loading...'
        :
        <div className={ListStyle.listContainer}>
        <div >
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
                    {users.map((userInfo) => 
                    <User key={userInfo._id} userInfo={
                            {id:userInfo._id,
                            name:userInfo.first_name+' '+userInfo.last_name,    
                            email:userInfo.email,
                            profileImg:userInfo.avatar,
                            status:userInfo.active?'active':'inactive',
                            access:userInfo.role,
                            owner:userInfo.owner}
                        } 
                    />)
                    }
                </tbody>

            </table>
        </div>
            <ReactPaginate
                breakLabel="..."
                previousLabel={<ArrowLeft/>}
                nextLabel={<ArrowRight/>}
                pageRangeDisplayed={5}
                className={ListStyle.pagination}
                pageClassName={ListStyle.pageNumber}
                activeClassName={ListStyle.active}
                previousClassName={ListStyle.left}
                nextClassName={ListStyle.right}
                pageCount={5}
                onPageChange={pageChangeHandler}
                renderOnZeroPageCount={null}
            />
        </div>
    )
}


export default UserList