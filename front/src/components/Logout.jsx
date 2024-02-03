import React from 'react'

import { UseLogout } from '../hooks/useAuth'

const Logout = () => {

    const handleLogout = async () => {
        const res = await UseLogout()
        if(res.status === 200) location.reload()
    }

    return (
        <button
            onClick={handleLogout}
        >
            Logout
        </button>
    )
}

export default Logout