import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

import styles from "./Steps.module.css"

import { useForm, useFormContext } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

import Checkout from './Checkout'
import { useGlobalContext } from '@/contexts/store';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            // borderColor: '#6F7E8C',
            borderColor: 'teal',
        },
    },
});

const primary = {
    main: 'teal',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#fff',
};

export default function Address() {

    const methods = useFormContext()
    const { checkOutForm } = useGlobalContext()
    const { register, handleSubmit, formState, control } = methods
    const { errors } = formState


    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="firstName"
                        label="Primer nombre"
                        fullWidth
                        // autoComplete="given-name"
                        // variant="outlined"
                        {...register('firstName', {
                            required: "El campo es requerido"
                        })}
                        // error={!!errors.firstName}
                        error={!!errors.firstName}
                    // helperText={errors.firstName?.message}
                    />
                    {errors?.firstName && <small><>{errors.firstName.message}</></small>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CssTextField
                        id="lastName"
                        label="Apellido"
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                        {...register('lastName', {
                            required: "El campo es requerido"
                        })}
                        error={!!errors.lastName}
                    // helperText={errors.lastName?.message}
                    />
                    {errors?.lastName && <small><>{errors.lastName.message}</></small>}
                </Grid>
                <Grid item xs={12}>
                    <CssTextField
                        id="address"
                        label="Dirección"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                        {...register('address', {
                            required: "El campo es requerido"
                        })}
                        error={!!errors.address}
                    // helperText={errors.address?.message}
                    />
                    {errors?.address && <small className={styles.err}><>{errors.address.message}</></small>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CssTextField
                        id="city"
                        label="Ciudad"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="outlined"
                        {...register('city', {
                            required: "El campo es requerido"
                        })}
                        error={!!errors.city}
                    // helperText={errors.city?.message}
                    />
                    {errors?.city && <small className={styles.err}><>{errors.city.message}</></small>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CssTextField
                        id="state"
                        label="Estado / Provincia"
                        fullWidth
                        variant="outlined"
                        {...register('state', {
                            required: "El campo es requerido"
                        })}
                        error={!!errors.state}
                    // helperText={errors.state?.message}
                    />
                    {errors?.state && <small className={styles.err}><>{errors.state.message}</></small>}
                </Grid>
            </Grid>
        </>
    );
}