import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useGlobalContext } from '@/contexts/store';
import { useForm, useFormContext } from 'react-hook-form';
import styles from './Steps.module.css'
import { DevTool } from '@hookform/devtools';

export default function Payment() {

    const methods = useFormContext()

    const { checkOutForm } = useGlobalContext()
    const { register, handleSubmit, formState, control } = methods
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
                    // helperText={errors.cardName?.message}
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
                    // helperText={errors.cardNumber?.message}
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
                    // helperText={errors.expDate?.message}
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
                    // helperText={errors.cvv?.message}
                    />
                    {errors?.cvv && <small className={styles.err}><>{errors.cvv.message}</></small>}
                </Grid>
                {/* <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                        label="Remember credit card details for next time"
                    />
                </Grid> */}
            </Grid>
        </>
    );
}