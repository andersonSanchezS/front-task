/* eslint-disable react-hooks/exhaustive-deps */
// Hooks
import { useEffect } from 'react'
import { useFormik } from 'formik'
import { useFetch } from '../../../shared/hooks/useFetch'
import { useRouter } from 'next/router'
// View
import { RegisterV } from './components'
// Queries
import { register, login } from './queries'
// Utils
import { ToastContainer } from 'react-toastify'
import { Toast } from '../../../shared/utils'

export const RegisterC = () => {
    // Router
    const router = useRouter()
    // Fetch - Login
    const {
        fetch: fetch,
        data: dataFetch,
        loading: loadFetch,
        error: errFetch
    } = useFetch({ service: register, init: false })

    // Fetch register
    const {
        fetch: loginFetch,
        data: dataLogin,
        loading: loadLogin,
        error: errLogin
    } = useFetch({ service: login, init: false })

    // Form
    const RegisterForm = useFormik({
        initialValues: {
            first_Name: '',
            last_Name: '',
            email: '',
            password: '',
            password2: '',
            role: '',
            company: ''
        },
        onSubmit: () => {
            fetch({
                first_name: RegisterForm.values.first_Name,
                last_name: RegisterForm.values.last_Name,
                email: RegisterForm.values.email,
                password: RegisterForm.values.password,
                password2: RegisterForm.values.password2,
                role: 'admin',
                company: RegisterForm.values.company
            })
        },
        validateOnChange: false,
        validateOnBlur: false,
        validate: () => {
            if (
                RegisterForm.values.password !== RegisterForm.values.password2
            ) {
                Toast('Las contraseñas no coinciden', 'error')
            }

            if (RegisterForm.values.password.length < 6) {
                Toast('La contraseña debe tener al menos 6 caracteres', 'error')
            }

            if (
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                    RegisterForm.values.email
                ) === false
            ) {
                Toast('El email no es valido', 'error')
            }
        }
    })

    // Effects
    useEffect(() => {
        if (errFetch) {
            Toast(`${errFetch.message}`, 'error')
            return
        }
        if (dataFetch && !errFetch) {
            Toast('Registro exitoso', 'success')

            setTimeout(() => {
                loginFetch({
                    email: RegisterForm.values.email,
                    password: RegisterForm.values.password
                })
            }, 2000)
        }
    }, [dataFetch, loadFetch, errFetch])

    useEffect(() => {
        if (dataLogin && !errLogin) {
            localStorage.setItem('refresh_token', dataLogin?.refresh)
            localStorage.setItem('access_token', dataLogin?.access)
            router.push('/dashboard')
        }
    }, [dataLogin, errLogin, loadLogin])
    return (
        <RegisterV
            registerForm={RegisterForm}
            ToastContainer={ToastContainer}
        />
    )
}
