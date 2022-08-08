// Graphs
import { Line, Doughnut } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import { Box, Container, Grid, Typography } from '@mui/material'
Chart.register(CategoryScale)

export const DashBoardV = () => {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Estadisticas</h1>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                    <Line
                        data={{
                            labels: [
                                'January',
                                'February',
                                'March',
                                'April',
                                'May',
                                'June',
                                'July'
                            ],
                            datasets: [
                                {
                                    label: '# of Votes',
                                    data: [12, 19, 3, 5, 2, 3],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)'
                                    ],
                                    borderWidth: 1
                                }
                            ]
                        }}
                        width={250}
                        height={250}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Doughnut
                        data={{
                            labels: [
                                'January',
                                'February',
                                'March',
                                'April',
                                'May',
                                'June',
                                'July'
                            ],
                            datasets: [
                                {
                                    label: '# of Votes',
                                    data: [12, 19, 3, 5, 2, 3],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)'
                                    ],
                                    borderWidth: 1
                                }
                            ]
                        }}
                        width={250}
                        height={250}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <h1 style={{ textAlign: 'center' }}>Proyectos</h1>
                </Grid>
            </Grid>
        </>
    )
}
