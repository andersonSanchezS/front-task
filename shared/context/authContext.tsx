/* eslint-disable react-hooks/exhaustive-deps */

// React
import { createContext, useState, useEffect } from 'react'
// Hooks
import { useRouter } from 'next/router'
// Types
import { authJWT, Tcontext } from './types'
// Utils
import axios from 'axios'
import jwt_decode from 'jwt-decode'

const authContext = createContext({} as Tcontext)

export default authContext

export const AuthProvider = (child: any) => {
    const [authToken, setAuthToken] = useState('')
    const [refreshToken, setRefreshToken] = useState('')
    const [user, setUser] = useState({ id: 0, name: '' })
    const [admin, setAdmin] = useState(false)
    const [roles, setRoles] = useState([])
    const [company, setCompany] = useState({ id: '', name: '' })
    const [logged, setLogged] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const access_token = localStorage.getItem('access_token')!
        const refresh_token = localStorage.getItem('refresh_token')!

        try {
            const token: authJWT = jwt_decode(access_token)
            if (
                (router.pathname === '/auth/login' ||
                    router.pathname === '/auth/register') &&
                token
            )
                router.push('/tasks')
            if (token.exp * 1000 < Date.now()) {
                ;(async () => {
                    const res = await axios.post(
                        'http://localhost:8000/api/auth/refresh',
                        { refresh: refresh_token }
                    )
                    localStorage.setItem('access_token', res.data.access)
                    localStorage.setItem('refresh_token', res.data.refresh)
                    setAuthToken(res.data.access)
                    setRefreshToken(res.data.refresh)
                })()
            }
            setAuthToken(localStorage.getItem('access_token')!)
            setRefreshToken(localStorage.getItem('refresh_token')!)
            setUser({
                id: token.user_id,
                name: token.name
            })
            setAdmin(token.is_admin)
            setRoles(token.roles)
            setCompany({ id: token.company_id, name: token.company_name })
            setLogged(true)
        } catch (e) {
            if (router.pathname === '/auth/register') return
            router.push('/auth/login')
        }
    }, [router.pathname])

    return (
        <authContext.Provider
            value={{ authToken, refreshToken, user, admin, roles, company }}
        >
            {child.children}
        </authContext.Provider>
    )
}
