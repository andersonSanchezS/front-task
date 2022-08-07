import axios from 'axios'

export const register = async (data: any) => {
    const res = await axios.post(
        'http://localhost:8000/api/auth/register',
        data
    )
    return res.data
}

export const login = async (data: any) => {
    const res = await axios.post('http://localhost:8000/api/auth/login', data)
    return res.data
}
