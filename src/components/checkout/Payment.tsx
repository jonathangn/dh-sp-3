import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useFormContext } from 'react-hook-form';
import styles from './Steps.module.css'

export default function Payment() {

    const methods = useFormContext()
    const { register, formState } = methods
    const { errors } = formState

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="cardName"
                        label="Nombre titular"
                        fullWidth
                        autoComplete="cc-name"
                        variant="outlined"
                        {...register('cardName', {
                            required: "El campo es requerido"
                        })}
                        error={!!errors.cardName}
                    />
                    {errors?.cardName && <small className={styles.err}><>{errors.cardName.message}</></small>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="cardNumber"
                        label="Número de tarjeta"
                        fullWidth
                        autoComplete="cc-number"
                        variant="outlined"
                        {...register('cardNumber', {
                            required: "El campo es requerido"
                        })}
                        error={!!errors.cardNumber}
                    />
                    {errors?.cardNumber && <small className={styles.err}><>{errors.cardNumber.message}</></small>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="expDate"
                        label="Fecha de expiración"
                        fullWidth
                        autoComplete="cc-exp"
                        variant="outlined"
                        {...register('expDate', {
                            required: "El campo es requerido"
                        })}
                        error={!!errors.expDate}
                    />
                    {errors?.expDate && <small className={styles.err}><>{errors.expDate.message}</></small>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="cvv"
                        label="CVV"
                        fullWidth
                        autoComplete="cc-csc"
                        variant="outlined"
                        {...register('cvv', {
                            required: "El campo es requerido"
                        })}
                        error={!!errors.cvv}
                    />
                    {errors?.cvv && <small className={styles.err}><>{errors.cvv.message}</></small>}
                </Grid>
            </Grid>
        </>
    );
}