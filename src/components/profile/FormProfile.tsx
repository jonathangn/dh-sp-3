import { Button, Input, TextField } from "@mui/material";
import { Resolver, useForm } from "react-hook-form";
import styles from "./FormProfile.module.css"

type TFormValues = {
  firstName: string,
  lastName: string,
  address: string
}

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
  const { register, handleSubmit, watch, formState: { errors } } = useForm<TFormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  console.log(watch("firstName")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.input}>

        {/* register your input into the hook by invoking the "register" function */}
        <TextField label="Nombre" variant="outlined" defaultValue="Nombre" {...register("firstName")} />
        {errors?.firstName && <small>{errors.firstName.message}</small>}
      </div>


      {/* include validation with required or other standard HTML validation rules */}
      <div className={styles.input}>
        <TextField label="Apellido" variant="outlined" {...register("lastName", { required: true })} />
        {/* {errors.required && <span><small className={styles.error}>El campo es requerido</small></span>} */}
      </div>

      <div className={styles.input}>
        <TextField label="Dirección" variant="outlined" {...register("address", { required: true })} />
        {/* {errors.required && <span><small className={styles.error}>El campo es requerido</small></span>} */}
      </div>

      <div>
        <Button variant="outlined" type="submit" >Actualizar</Button>
      </div>
    </form>
  );
}