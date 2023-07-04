import { Card } from 'antd'
import React, { useEffect } from 'react'
import NavMenu from './NavMenu'
import useAxiosGet from './../hooks/useAxiosGet';

const Users = ({ isAuth, authSetter }) => {
    // const user = JSON.parse(localStorage.getItem("user"))
    const [users, getUsers] = useAxiosGet([])
    useEffect(() => {
        getUsers("/users")
    },[])
    return (
        <>
            <div style={{ width: "100%" }}>
                <NavMenu isAuth={isAuth} authSetter={authSetter} />
                <div className='row mt-2'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <Card
                            title="Users"
                        >
                            {users?.length > 0 && users?.map(item => <div className='border p-2'>
                                <p><b>Name :</b> {`${item?.firstName} ${item?.lastName}`}</p>
                                <p><b>Email :</b> {item?.email}</p>
                                <p><b>Registration Number :</b> {item?.registrationNumber}</p>
                                {/* <hr /> */}
                            </div>)}

                        </Card>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        </>
    )
}

export default Users