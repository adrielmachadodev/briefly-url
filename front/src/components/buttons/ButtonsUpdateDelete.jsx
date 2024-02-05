import { useState } from 'react'

import { UseAuthContextProvider } from '../../context/AuthContext'

import { useDeleteUrls } from '../../hooks/useUrl'

import Delete from '../../assets/delete.svg'
import Edit from '../../assets/edit.svg'

import EditForm from '../EditForm'

const ButtonsUpdateDelete = ({id, setUrls, originUrl}) => {

    const { deleteUrl, user } = UseAuthContextProvider()
    const [ isEdit, setIsEdit ] = useState(false)

    const handleDelete = async () => {
        const res = await useDeleteUrls(id, user.token)
        if(res.data) {
            setUrls(res.data)
            deleteUrl(id)
        }
    }
    const handleEdit = async () => {
        setIsEdit(true)
    }

    return (
        <div className="absolute top-4 right-2 flex items-center gap-2">
            <button onClick={handleDelete}>
                <img
                    src={Delete}
                    alt='Delete icon'
                    className='max-w-5'
                />
            </button>
            <button onClick={handleEdit}>
                <img
                    src={Edit}
                    alt='Delete icon'
                    className='max-w-5'
                />
            </button>
            {
                isEdit 
                && <EditForm editUrl={originUrl} setIsEdit={setIsEdit} id={id} />
            }
        </div>
    )
}

export default ButtonsUpdateDelete