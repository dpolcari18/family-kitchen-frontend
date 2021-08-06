import React from 'react'

import { useAuth0 } from "@auth0/auth0-react";

import AuthNavigation from './authNavigation'
import NoAuthNavigation from './noAuthNavigation'

const NavLinks = () => {
    const { isAuthenticated } = useAuth0()

    return isAuthenticated ? <AuthNavigation /> : <NoAuthNavigation />
}

export default NavLinks