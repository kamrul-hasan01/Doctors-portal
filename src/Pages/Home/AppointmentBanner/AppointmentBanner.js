import React from 'react';
import Box from '@mui/material/Box';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
const appointmentBg = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: "darken, luminosity"

}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ height: "400px", marginTop: "-110px" }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 3 }} style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" sx={{ mb: 2 }} style={{ color: "white" }}>
                            Make a Appointment Today
                        </Typography>
                        <Typography variant="h6" style={{ color: "white", fontSize: "14px", fontWeight: "300" }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio porro eaque neque fugit quas quasi quibusdam harum ipsum voluptatem error.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>

                    </Box>
                </Grid>

            </Grid>
        </Box >
    );
};

export default AppointmentBanner;