'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import styles from "./TabAccess.module.css";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (message: string) => toast(message);

interface userFormRegister {
  FirstName: string,
  LastName: string,
  Email: string,
  DNI: string,
  Role: string,
  Password: string,
  Birth: string
}

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
      borderColor: 'teal',
    },
  },
});


export default function Register() {

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<userFormRegister>()

  const onSubmit = handleSubmit(async (data) => {
    const hoy = new Date();
    const age = data.Birth?.substring(6)
    var edad = hoy.getFullYear() - Number(age);
    if (edad > 18) {
      try {
        notify("Registro exitoso!")
      } catch (error) {
      }
    } else {
      notify('Debe ser mayor de edad')
    }
  });

  return (
    <>
      <Container maxWidth="xs">
        <Box
          sx={{
            marginY: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  {...register("FirstName", {
                    required: true,
                  })}
                  autoComplete="FirstName"
                  name="FirstName"
                  required
                  fullWidth
                  id="FirstName"
                  label="Primer Nombre"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  {...register("LastName", {
                    required: true,
                  })}
                  autoComplete="LastName"
                  name="LastName"
                  required
                  fullWidth
                  id="LastName"
                  label="Apellido"
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  {...register("Email", {
                    required: true,
                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  })}
                  autoComplete="Email"
                  name="Email"
                  required
                  fullWidth
                  id="Email"
                  label="Correo Electrónico"
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  {...register("Password", {
                    required: true,
                    minLength: 6
                  })}
                  autoComplete="Password"
                  name="Password"
                  required
                  fullWidth
                  label="Contraseña"
                  type="password"
                  id="Password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  {...register("DNI", {
                    required: true,
                  })}
                  autoComplete="DNI"
                  name="DNI"
                  required
                  fullWidth
                  id="DNI"
                  label="DNI"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  {...register("Birth", {
                    required: true,
                    maxLength: 10,
                  })}
                  autoComplete="Birth"
                  name="Birth"
                  required
                  fullWidth
                  id="Birth"
                  label="Nacimiento DD/MM/AAAA"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              className={styles.button}
              variant="contained"
              sx={{ mt: 6, mb: 2, paddingBlock: 2 }}
            >
              Crear cuenta
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
interface userRegistered {
  id: number,
  dni: string,
  first_name: string,
  last_name: string,
  birth: string,
  email: string,
  password: string,
}

