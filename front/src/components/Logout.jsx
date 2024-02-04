import React from 'react'

import { UseAuthContextProvider } from '../context/AuthContext' 

const Logout = () => {

    const { signOut } = UseAuthContextProvider()

    return (
        <button
            onClick={signOut}
        >
            Logout
        </button>
    )
}

export default Logout