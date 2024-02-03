import axios from "../config/axios.js"

import { toast } from 'react-toastify'

export const useAddUrls = async (originUrl, shortUrl) => {
    try {
        const res = await axios.post('/urls', {originUrl, shortUrl: !shortUrl ? undefined : shortUrl})
        return res
    } catch (error) {
        toast(error.response.data.message)
        console.log(error);
    }
}

export const useGetUrls = async () => {
    try {
        const res = await axios.get('/urls')
        return res
    } catch (error) {
        toast(error.response.data.message)
        console.log(error);
    }
}

export const useDeleteUrls = async (url) => {
    try {
        const res = await axios.delete(`/urls/${url}`)
        return res
    } catch (error) {
        toast(error.response.data.message)
        console.log(error);
    }
}

export const useSaveUrls = async (url) => {
    try {
        const res = await axios.put(`/urls/${url}`)
        return res
    } catch (error) {
        toast(error.response.data.message)
        console.log(error);
    }   
}

export const useEditUrls = async (id, newUrl) => {
    try {
        const res = await axios.patch(`/urls/${id}`, {newUrl})
        return res
    } catch (error) {
        toast(error.response.data.message)
        console.log(error);
    }   
}