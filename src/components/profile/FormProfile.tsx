import { Button, Input, TextField, styled } from "@mui/material";
import { Resolver, useForm } from "react-hook-form";
import styles from "./FormProfile.module.css"
import { useSession } from "next-auth/react";

type TFormValues = {
  firstName: string,
  lastName: string,
  address: string
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

const resolver: Resolver<TFormValues> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
        firstName: {
          type: "required",
          message: "This is required.",
        },
      }
      : {},
  }
}

export default function FormProfile() {

  const { data } = useSession()
  const { register, handleSubmit, watch, formState: { errors } } = useForm<TFormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  // console.log(watch("firstName")); // watch input value by passing the name of it

  return (
    <form onSubmit={onSubmit} className={styles.form}>

      <h3 style={{ fontFamily: 'Poppins', marginBottom: '2rem', color: 'teal' }}>Actualiza aquí tus datos</h3>
      <div className={styles.input}>
        <CssTextField InputLabelProps={{ shrink: true, }} label="Nombre" variant="outlined" defaultValue={data?.user?.user?.first_name} {...register("firstName")} />
        {errors?.firstName && <small>{errors.firstName.message}</small>}
      </div>

      <div className={styles.input}>
        <CssTextField InputLabelProps={{ shrink: true, }} label="Apellido" variant="outlined" defaultValue={data?.user?.user?.last_name} {...register("lastName", { required: true })} />
        {/* {errors.required && <span><small className={styles.error}>El campo es requerido</small></span>} */}
      </div>

      <div className={styles.input}>
        <CssTextField InputLabelProps={{ shrink: true, }} label="Rol" variant="outlined" disabled defaultValue={data?.user?.user?.Role} {...register("address", { required: true })} />
        {/* {errors.required && <span><small className={styles.error}>El campo es requerido</small></span>} */}
      </div>

      <div>
        <Button variant="outlined" type="submit" >Actualizar</Button>
      </div>
    </form>
  );
}