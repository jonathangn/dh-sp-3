'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import styles from "./TabAccess.module.css";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { Mode } from '@mui/icons-material';
import { useGlobalContext } from '@/contexts/store';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://berebere.com/">
        Bere Bere
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
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

type userFormLogin = {
  Email: string,
  Password: string,
}

export default function LogIn() {
  const [error, setError] = React.useState('')
  const router = useRouter()
  const { isAdmin, setIsAdmin } = useGlobalContext()
  const { data: dataSession } = useSession()

  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<userFormLogin>()

  const onSubmit = handleSubmit((data) => {
    const resSignIn = signIn('credentials', {
      email: data.Email,
      password: data.Password,
      redirect: false
    }).then((res) => {
      console.log(res, 'resINLogin')
      if (res?.error) return setError(res.error)
      if (res?.ok) {
        // // console.log(res.data, 'res')
        // console.log(resSignIn, 'resSignIn')
        // // const data = res.json()
        // if (data?.Role === "admin"){
        //   console.log()
        //     localStorage.setItem('userRole', JSON.stringify(res));
        // }        
        console.log(dataSession)
        // return router.push('/')
      }
    });
    console.log(resSignIn, 'resSignIn')
  })

  return (
    <>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginY: 18,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <CssTextField
              {...register("Email", {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
              margin="normal"
              fullWidth
              id="Email"
              label="Correo electrónico"
              name="Email"
              autoComplete="Email"
              autoFocus
              error={!!errors.Email}
              helperText={errors?.Email?.message}
            />
            <>
              {errors?.Email?.type === "required" && <small>El campo es requerido</small>}
              {errors?.Email?.type === "pattern" && <small>El formato no corresponde</small>}
            </>

            <CssTextField
              {...register("Password", {
                required: true
              })}
              margin="normal"
              fullWidth
              name="Password"
              label="Contraseña"
              type="password"
              id="Password"
              autoComplete="Password"
              error={!!errors.Password}
              helperText={errors?.Password?.message}
            />
            <>
              {errors?.Password?.type === "required" && <small style={{ color: '#d32f2f' }}>El campo es requerido</small>}
            </>

            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Mantener sesión iniciada"
            /> */}
            <Button
              disabled={!isValid}
              type="submit"
              fullWidth
              className={styles.button}
              variant="contained"
              sx={{ mt: 6, mb: 2, paddingBlock: 2 }}
            >
              Iniciar Sesión
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}