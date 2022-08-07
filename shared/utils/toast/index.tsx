import { toast } from 'react-toastify'

export type toastType = 'success' | 'error' | 'warning' | 'info'

export const Toast = (message: string, type: toastType) => {
    if (type == 'success') {
        return toast.success(`${message}`, {
            position: 'bottom-right',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: 'success1'
        })
    } else if (type == 'error') {
        return toast.error(`${message}`, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: 'error1'
        })
    } else if (type == 'warning') {
        return toast.warning(`${message}`, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: 'warning1'
        })
    } else {
        return toast.info(`${message}`, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: 'info1'
        })
    }
}
