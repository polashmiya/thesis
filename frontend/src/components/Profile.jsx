import { Card } from 'antd'
import React from 'react'
import NavMenu from './NavMenu'

const Profile = ({ isAuth, authSetter }) => {
    const user = JSON.parse(localStorage.getItem("user"))
    return (
        <div style={{ width: "100%" }}>
            <NavMenu isAuth={isAuth} authSetter={authSetter} />
            <div className='row mt-2'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <Card
                        title="Profile"
                    >
                        <p><b>Name :</b> {`${user?.firstName} ${user?.lastName}`}</p>
                        <p><b>Email :</b> {user?.email}</p>
                        <p><b>Registration Number :</b> {user?.registrationNumber}</p>
                    </Card>
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    )
}

export default Profile