// React
import {
    createContext,
    FC,
    PropsWithChildren,
    useEffect,
    useState
} from 'react'
import { useFetch } from '../hooks/useFetch'
import { projects } from './queries'

interface ContextProps {
    projects: any
    projectSelected: any
    setProjectSelectedMethod: (id: number) => void
}

export const ProjectContext = createContext({} as ContextProps)

export const ProjectContextProvider: FC<PropsWithChildren> = ({ children }) => {
    // Hooks
    // get projects
    const {
        fetch: fetch,
        data: dataFetch,
        loading: loadFetch,
        error: errFetch
    } = useFetch({ service: projects, init: true })

    // States
    const [projectList, setProjectList] = useState([])
    const [projectSelected, setProjectSelected] = useState(0)

    // Effects
    useEffect(() => {
        if (loadFetch) {
            console.log('cargando')
        }
        if (errFetch) {
            console.log('error')
        }
        if (dataFetch !== undefined) {
            setProjectList(dataFetch)
        }
    }, [dataFetch, errFetch, loadFetch])

    // methods
    const setProjectSelectedMethod = (id: number) => {
        setProjectSelected(id)
    }

    return (
        <ProjectContext.Provider
            value={{
                setProjectSelectedMethod,
                projects: projectList,
                projectSelected
            }}
        >
            {children}
        </ProjectContext.Provider>
    )
}
