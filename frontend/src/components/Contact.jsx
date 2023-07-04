import { Card } from 'antd'
import React from 'react'
import NavMenu from './NavMenu'

const Contact = ({ isAuth, authSetter }) => {
    return (
        <div style={{ width: "100%" }}>
            <NavMenu isAuth={isAuth} authSetter={authSetter} />
            <div className='row mt-2'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <Card
                        title="Contacts"
                    >
                        <p><b>ফরিদপুর ইঞ্জিনিয়ারিং কলেজ</b></p>
                        <p><b>ডঃ কাজী মোতাহের হোসেন রোড,কমলাপুর, বায়তুল আমান, ফরিদপুর - ৭৮০০</b></p>
                        <p><b>ফোনঃ ০৬৩১-৬৬৩০৪, ০৬৩১-৬৬৩০৫</b></p>
                        <p><b>ওয়েব-মেইলঃ principal@fec.ac.bd</b></p>
                        <p><b>ওয়েবসাইটঃ www.fec.ac.bd</b></p>
                    </Card>
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    )
}

export default Contact