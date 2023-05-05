import React from 'react'
import User from '../User/User'
import ListStyle from './UserList.module.css'
import users from '../../data/userData'
import ReactPaginate from 'react-paginate'
import { ArrowLeft,ArrowRight} from 'react-feather';

const UserList = () => {
    return (
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
                    {users.map((userInfo) => <User key={userInfo.id} userInfo={userInfo} />)
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
                pageCount={2}
                renderOnZeroPageCount={null}
            />
        </div>
    )
}


export default UserList