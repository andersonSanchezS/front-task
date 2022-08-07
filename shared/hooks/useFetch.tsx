/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from 'react'

type TypeDefault = {
    params?: any
    result: any
}

type Params<T extends TypeDefault> = {
    service: (...args: T['params']) => Promise<any>
    init?: boolean
}

type TError = {
    message?: string
    code?: number
}

type TReturn<T extends TypeDefault> = {
    data: T['result']
    loading: boolean
    called: boolean
    error?: TError
    fetch: (...params: T['params']) => Promise<any>
    reset: () => void
    setForcedData: (params: T['result']) => void
}

export const useFetch = <T extends TypeDefault>({
    service,
    init
}: Params<T>): TReturn<T> => {
    const [data, setData] = useState<T['result'] | undefined>(undefined)
    const [loading, setLoading] = useState(false)
    const [called, setCalled] = useState(false)
    const [error, setError] = useState<TError | undefined>(undefined)

    /**
     * Función que ejecuta el servicio y captura los estados de la petición
     * @param {T} args argumentos del servicio
     * @returns {void}
     */
    const getService = async (...args: T['params']) => {
        try {
            setLoading(true)
            const res: T['result'] = await service(...args)

            setLoading(false)
            setCalled(true)
            setError(undefined)
            setData(res)
            return res
        } catch (err: any) {
            setLoading(false)
            setData(undefined)
            setError({
                message:
                    err?.response?.data?.message ||
                    err?.response?.data?.error ||
                    err?.message ||
                    'Se ha producido un error',
                code: err?.response?.status || err?.code || 404
            })
        }
    }

    /**
     * Función que reinicia los estados
     * @returns {void}
     */
    const reset = useCallback(() => {
        setData(undefined)
        setLoading(false)
        setCalled(false)
        setError(undefined)
    }, [])

    // Efecto que ejecuta el servicio cuando inicializa el componente
    useEffect(() => {
        init && getService()
    }, [])

    return {
        data,
        loading,
        called,
        error,
        fetch: getService,
        reset,
        setForcedData: setData
    }
}
