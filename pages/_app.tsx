// CSS
import '../styles/globals.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'react-toastify/dist/ReactToastify.css'
// ScrollBars
import PerfectScrollbar from 'react-perfect-scrollbar'
import type { AppProps } from 'next/app'
// Theme
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { darkTheme, lightTheme } from './../shared/themes'
// Context
import { AuthProvider } from '../shared/context/authContext'
import { UIContextProvider } from '../shared/context/UIContext'
import { ProjectContextProvider } from '../shared/context/projectContext'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <UIContextProvider>
                <ProjectContextProvider>
                    <ThemeProvider theme={darkTheme}>
                        <CssBaseline />
                        <PerfectScrollbar>
                            <Component {...pageProps} />
                        </PerfectScrollbar>
                    </ThemeProvider>
                </ProjectContextProvider>
            </UIContextProvider>
        </AuthProvider>
    )
}

export default MyApp
