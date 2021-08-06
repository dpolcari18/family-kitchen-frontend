import React from 'react'

import { Link } from 'react-router-dom'

const AuthNav = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/profile'>Profile</Link>
        </div>
    )
}

export default AuthNav