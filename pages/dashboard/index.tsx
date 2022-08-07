import type { NextPage } from 'next'
// Components
import { Layout } from '../../shared/components'
import { useContext } from 'react'
import { ProjectContext } from '../../shared/context/projectContext'

const DashBoard: NextPage = () => {
    const { projects } = useContext(ProjectContext)
    console.log(projects)
    return (
        <Layout title="dashboard">
            <h1>hello dashboard</h1>
        </Layout>
    )
}

export default DashBoard
