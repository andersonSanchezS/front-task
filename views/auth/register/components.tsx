// React
import { FC } from 'react'
// Mui Imports
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
// Utils
import { Copyright } from '../../../shared/utils/copyright'
// Types
import { TRegisterV } from './types'

export const RegisterV: FC<TRegisterV> = ({ registerForm, ToastContainer }) => {
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Registro
                </Typography>
                <Box
                    component="form"
                    noValidate
                    onSubmit={registerForm.handleSubmit}
                    sx={{ mt: 3 }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="first_Name"
                                required
                                fullWidth
                                id="first_Name"
                                label="Nombre"
                                autoFocus
                                value={registerForm.first_Name}
                                onChange={registerForm.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="last_Name"
                                label="Apellido"
                                name="last_Name"
                                autoComplete="family-name"
                                value={registerForm.last_Name}
                                onChange={registerForm.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Correo"
                                name="email"
                                autoComplete="email"
                                value={registerForm.email}
                                onChange={registerForm.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="contraseña"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                value={registerForm.password}
                                onChange={registerForm.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password2"
                                label="Confirmar contraseña"
                                type="password"
                                id="password2"
                                autoComplete="new-password2"
                                value={registerForm.password2}
                                onChange={registerForm.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="company"
                                label="Empresa"
                                type="text"
                                id="company"
                                autoComplete="company"
                                value={registerForm.company}
                                onChange={registerForm.handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Copyright sx={{ mt: 5 }} />
        </Container>
    )
}
