/* eslint-disable react-hooks/exhaustive-deps */
// Hooks
import { useEffect } from 'react'
import { useFormik } from 'formik'
import { useFetch } from '../../../shared/hooks/useFetch'
import { useRouter } from 'next/router'
// View
import { LoginV } from './component'
// Queries
import { login } from './queries'
// Utils
import { ToastContainer } from 'react-toastify'
import { Toast } from '../../../shared/utils'

export const LoginC = () => {
    // Router
    const router = useRouter()
    // Fetch
    const {
        fetch: fetch,
        data: dataFetch,
        loading: loadFetch,
        error: errFetch
    } = useFetch({ service: login, init: false })

    // Form
    const LoginForm = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: () => {
            fetch({
                email: LoginForm.values.email,
                password: LoginForm.values.password
            })
        }
    })

    // Effects
    useEffect(() => {
        if (loadFetch) {
            console.log('cargando')
        }
        if (errFetch) {
            Toast('Usuario y/o contraseña incorrectos', 'error')
        }
        if (dataFetch !== undefined) {
            localStorage.setItem('refresh_token', dataFetch?.refresh)
            localStorage.setItem('access_token', dataFetch?.access)
            Toast('Bienvenido/a', 'success')
            setTimeout(() => {
                router.push('/dashboard')
            }, 2000)
        }
    }, [dataFetch, errFetch, loadFetch])

    return <LoginV loginForm={LoginForm} ToastContainer={ToastContainer} />
}
