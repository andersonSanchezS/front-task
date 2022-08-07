import Head from 'next/head'
// Mui
import { Box } from '@mui/material'
import { FC } from 'react'
// Components
import { NavBar, SideBar } from '../index'

interface Props {
    title?: string
    children?: any
}

export const Layout: FC<Props> = ({ title = '', children }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>
            <NavBar />
            <SideBar />
            <Box sx={{ padding: '10px 20px' }}>{children}</Box>
        </Box>
    )
}
