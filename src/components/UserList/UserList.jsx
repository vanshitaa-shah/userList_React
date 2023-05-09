import React from 'react'
import User from '../User/User'
import ListStyle from './UserList.module.css'
import ReactPaginate from 'react-paginate'
import Error from '../Error/Error'
import { ArrowLeft,ArrowRight} from 'react-feather';
import { Oval } from 'react-loader-spinner';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, userActions } from '../../store/userSlice';


const UserList = () => {
    const users=useSelector(state=>state.user.users);
    const pageCount=useSelector(state=>state.user.pageCount);
    const status=useSelector(state=>state.user.status);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers(pageCount))
    },[pageCount])

    const pageChangeHandler=(data)=>{
        dispatch(userActions.pageChangeHandler(data.selected))
    }
    return (
    <>

        {/* conditional rendering for  Loader  */}
        {status==='loading' &&       
        <Oval
            height={80}
            width={80}
            color="orange"
            wrapperClass={ListStyle.loader}
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="rgba(243, 177, 90, 0.5)"
            strokeWidth={2}
            strokeWidthSecondary={2}
        />}

        {/* Content will be rendered once data is fetched */}
        {status==='success' &&
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

        {/* For pagination */}
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
            initialPage={pageCount}
            pageCount={5}
            onPageChange={pageChangeHandler}
            renderOnZeroPageCount={null}
        />

        </div>}

        {/* Error Handling  */}
        {status==='failed' && 
           <Error/>
        }

    </>
    )
}


export default UserList;