import axios from 'axios'

export const projects = async (data: any) => {
    const res = await axios.get(
        'http://localhost:8000/api/task/projects/list',
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        }
    )
    return res.data
}
