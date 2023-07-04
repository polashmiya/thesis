import React from 'react'
import Blogs from './Blogs'
import NavMenu from './NavMenu'

const BlogsSinglePage = ({ isAuth, authSetter }) => {
    return (
        <>
            <NavMenu isAuth={isAuth} authSetter={authSetter} />
            <Blogs />
        </>
    )
}

export default BlogsSinglePage