'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import styles from "./TabAccess.module.css";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';


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

type userFormLogin = {
  Email: string,
  Password: string,
}

export default function LogIn() {
  const [error, setError] = React.useState('')
  const router = useRouter()

  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<userFormLogin>()

  const onSubmit = handleSubmit((data) => {
    const resSignIn = signIn('credentials', {
      email: data.Email,
      password: data.Password,
      redirect: false
    }).then((res) => {
      if (res?.error) return setError(res.error)
      if (res?.ok) {
        return router.push('/')
      }
    });
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
              {errors?.Password?.type === "required" && <small>El campo es requerido</small>}
            </>
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