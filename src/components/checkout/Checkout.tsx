'use client'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Address from './Address';
import Payment from './Payment';
import Review from './Review';
import { FormProvider, useForm } from 'react-hook-form';
import { useGlobalContext } from '@/contexts/store';
import { useEffect } from 'react';

const steps = ['Dirección de envío', 'Detalles de pago', 'Resumen del pedido'];

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <Address />;
        case 1:
            return <Payment />;
        case 2:
            return <Review />;
        default:
            throw new Error('Paso desconocido');
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#008080',
        },
        secondary: {
            main: '#fff',
        },
    },
    typography: {
        fontFamily: [
            'poppins',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
    }
});

export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(0);

    const methods = useForm()
    const { setCartItems } = useGlobalContext()
    const { control, formState: { isValid } } = methods

    const onSubmit = (data: any) => {

    }

    useEffect(() => {
        if (activeStep === steps.length) {
            setCartItems([])
        }
    }, [activeStep])

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Orden de compra
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step sx={{
                                '& .MuiStepLabel-root .Mui-active': {
                                    '& .MuiStepIcon-text': {
                                        color: 'white',
                                    },
                                },
                            }} key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                                Gracias por generar tu orden.
                            </Typography>
                            <Typography variant="subtitle1">
                                Nos complace haber atendido tu solicitud.
                            </Typography>
                            <Link href="/">
                                Seguir comprando
                            </Link>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <FormProvider {...methods}>
                                <form onSubmit={methods.handleSubmit(onSubmit)}>
                                    {getStepContent(activeStep)}
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        {activeStep !== 0 && (
                                            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                                Anterior
                                            </Button>
                                        )}
                                        <Button
                                            disabled={!isValid}
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 3, ml: 1, background: 'teal' }}
                                            type={activeStep === steps.length - 1 ? 'submit' : 'button'}
                                        >
                                            {activeStep === steps.length - 1 ? 'Confirmar orden' : 'Siguiente'}
                                        </Button>
                                    </Box>
                                </form>
                            </FormProvider>
                        </React.Fragment>
                    )}
                </Paper>
            </Container>
        </ThemeProvider>
    );
}