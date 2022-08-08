import type { NextPage } from 'next'
import { useContext } from 'react'
// Components
import { Layout } from '../../shared/components'
import { ProjectContext } from '../../shared/context/projectContext'
import { DashBoardC } from '../../views/dashboard'

const DashBoard: NextPage = () => {
    const { projects } = useContext(ProjectContext)
    console.log(projects)
    return (
        <Layout title="dashboard">
            <DashBoardC />
        </Layout>
    )
}

export default DashBoard
