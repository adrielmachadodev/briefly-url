import { UseAuthContextProvider } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

import Save from '../../assets/save.svg'
import Check from '../../assets/check.svg'


import { useSaveUrls } from '../../hooks/useUrl'

const ButtonSave = ({id, isSave}) => {

    const { isAuthenticated, saveUrl, user } = UseAuthContextProvider()
    const navigate = useNavigate()

    const handleButtonSave = async () => {
        if(!isAuthenticated) return navigate('/login')
        const { data } = await useSaveUrls(id, user.token)
        if(data) saveUrl(id)
    }
    
    return (
        <div className='absolute top-4 right-2'>
            {
                !isSave
                ? <button onClick={handleButtonSave}>
                        <img 
                            src={Save}
                            className='w-5'
                            alt='Button save'
                        />
                    </button>
                : <img 
                        src={Check}
                        className='w-5'
                        alt='image check'
                    />
            }
        </div>
    )
}

export default ButtonSave