import { Typography } from '@mui/material'
import Link from 'next/link'

export const Copyright = (props: any) => {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            <Link color="inherit" href="https://www.infinitytech.com.co/">
                Infinity Tech
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}
