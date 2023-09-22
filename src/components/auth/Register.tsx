'use client'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import styles from "./TabAccess.module.css";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Bere Bere
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
      // borderColor: '#6F7E8C',
      borderColor: 'teal',
    },
  },
});

const defaultTheme = createTheme();

export default function Register() {
  const [error, setError] = useState()
  const router = useRouter()

  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<userFormRegister>()

  const onSubmit = handleSubmit(async (data) => {
    // event.preventDefault();
    const hoy = new Date();
    // const data = new FormData(event.currentTarget);
    const age = data.Birth?.substring(6)
    var edad = hoy.getFullYear() - Number(age);
    if (edad > 18) {
      console.log('Es Mayor')
      console.log(data.DNI)
      console.log(data.FirstName)
      console.log(data.LastName)
      console.log(data.Birth)
      console.log(data.Email)
      console.log(data.Password)
      try {
        notify("Registro exitoso!")
        // const res = await fetch("http://3.90.34.20:8080/berebere/users/register", {
        //   method: "POST",
        //   // mode: 'no-cors',
        //   headers: {
        //     "content-type": "application/json",
        //     // 'Access-Control-Allow-Origin': '*'
        //   },
        //   body: JSON.stringify({
        //     dni: data.DNI,
        //     first_name: data.FirstName,
        //     last_name: data.LastName,
        //     birth: data.Birth,
        //     email: data.Email,
        //     password: data.Password,
        //   })
        // })

        // if (res) {
        //   notify("Registro exitoso!")
        // }

        // console.log(res, 'RES')
        // const json = await res.json()

        // console.log(json, 'JSON')
        // // const json = await res.json()
        // // console.log(json)
        // console.log(res.status)
        // if (res.ok) () => signIn('credentials', {
        //   email: data.get('Email'),
        //   password: data.get('Password'),
        //   redirect: false
        // }).then((res) => {
        //   // if (res?.error) return setError(res.error)
        //   if (res?.ok) return router.push('/')
        // });
      } catch (error) {
        console.log(error)
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

