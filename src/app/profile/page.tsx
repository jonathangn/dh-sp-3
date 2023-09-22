"use client";
import React from "react";
import ReactDOM from "react-dom";
// import { ThemeProvider } from "material-ui/styles";
// import theme from "./theme";
// import { Grid, Modal, Backdrop } from "material-ui/core";

import styles from "./page.module.css";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, FormControlLabel, FormLabel, Modal, Radio, RadioGroup, TextField, styled } from "@mui/material";
import Image from "next/image";
// import { makeStyles } from "@material-ui/styles";
// import GeneralSettings from "./GeneralSettiings";
import FormProfile from "../../components/profile/FormProfile";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { TCreateProduct } from "@/data/types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const profile = {
  firstName: " profile.firstName",
  lastName: " profile.lastName",
  email: "profile.email",
  phone: "profile.phone",
  state: "profile.state",
  country: "profile.country",
  isPublic: "profile.isPublic",
  canHire: "profile.canHire",
  name: "",
  jobtitle: "Customer Contact",
  note: "",
};

const contacts = [
  {
    name: "Jorg Ostrowski",
    jobtitle: "Infor PM",
    email: "a.c@infor.com",
    note: "",
  },
  {
    name: "Della Kent",
    jobtitle: "Infor Customer Success Manager",
    email: "a.c@infor.com",
    note: "",
  },
];

// function WrappedApp() {
//   return (
//     <ThemeProvider theme={theme}>
//       <App />
//     </ThemeProvider>
//   );
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: theme.spacing(3)
//   },
//   container: {
//     marginTop: theme.spacing(3)
//   },
//   actions: {
//     marginTop: theme.spacing(3)
//   }
// }));

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

const notify = (message: string) => toast(message);

export default function App() {
  const { data } = useSession()

  const { register, handleSubmit, watch, formState: { errors } } = useForm<TCreateProduct>({});

  const onSubmit = handleSubmit(async (data) => {
    // const product_code = 326598
    const res = await fetch("http://3.90.34.20:8080/berebere/products/create", {
      method: "POST",
      // mode: 'no-cors',
      headers: {
        "content-type": "application/json",
        // 'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        product_code: data.product_code,
        name: data.name,
        brand: data.brand,
        model: data.model,
        alcohol_content: data.alcohol_content,
        origin: data.origin,
        price: data.price,
        description: data.description,
        image_id: data.image_id,
        category_id: data.category_id,
        user_id: 1
      })
    })

    if (res) {
      const jsonData = await res.json();
      console.log(jsonData);
      notify("Creaste el nuevo producto")
    }
    // console.log(res)
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
  })

  const [isOpen, setisOpened] = React.useState(false);
  const [contact, setContact] = React.useState(profile);

  console.log(data, 'inProfile')
  //   const classes = useStyles();
  //   function openSettings(item) {
  //     console.log(item);
  //     setContact(item);
  //     setisOpened(true);
  //   }
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid xs={8}>
          <div className={styles.main}>
            <FormProfile />
          </div>
        </Grid>
        <Grid xs={4}>
          <div className={styles.sidebar}>
            <h1 className={styles.heading}>
              Detalles del Perfil
            </h1>
            <div className={styles.imgContainer}>
              <Image src="/images/brand/logo-berebere-1.png" width={200} height={200} alt="person" ></Image>
            </div>
          </div>
        </Grid>
        {/* <Modal
          onClose={() => setisOpened(false)}
          open={isOpen}
          //   BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        > */}
        {/* <Grid item md={5} xl={4} xs={12}> */}
        {/* <GeneralSettings profile={contact} /> */}
        {/* </Grid> */}
        {/* </Modal> */}
        {data?.user?.user?.Role === "admin" ? (
          <Grid xs={8}>
            <ToastContainer />
            <div className={styles.main}>
              <div>
                <h3 style={{ fontFamily: 'Poppins', marginBottom: '2rem', color: 'teal' }}>Crea aquí un nuevo producto</h3>
                <form onSubmit={onSubmit} className={styles.form}>
                  <div className={styles.input}>
                    <CssTextField fullWidth InputLabelProps={{ shrink: true, }} label="Nombre Producto" variant="outlined" {...register("name", { required: true })} />
                    {/* {errors?.name && <small>{errors.name.message}</small>} */}
                  </div>
                  <div className={styles.input}>
                    <CssTextField fullWidth InputLabelProps={{ shrink: true, }} label="Descripción" variant="outlined"  {...register("description", { required: true })} />
                    {/* {errors.required && <span><small className={styles.error}>El campo es requerido</small></span>} */}
                  </div>
                  <div className={styles.input}>
                    <CssTextField fullWidth InputLabelProps={{ shrink: true, }} label="Código de Producto" variant="outlined" {...register("product_code", { required: true })} />
                    {/* {errors.required && <span><small className={styles.error}>El campo es requerido</small></span>} */}
                  </div>
                  <div className={styles.input}>
                    <CssTextField fullWidth InputLabelProps={{ shrink: true, }} label="ID de Categoria" type="number" variant="outlined" {...register("category_id", { required: true })} />
                    {/* {errors.required && <span><small className={styles.error}>El campo es requerido</small></span>} */}
                  </div>
                  <div className={styles.input}>
                    <CssTextField fullWidth InputLabelProps={{ shrink: true, }} label="Marca" variant="outlined" {...register("brand", { required: true })} />
                    {/* {errors.required && <span><small className={styles.error}>El campo es requerido</small></span>} */}
                  </div>
                  <div className={styles.input}>
                    <CssTextField fullWidth InputLabelProps={{ shrink: true, }} label="Referencia / Modelo" variant="outlined" {...register("model", { required: true })} />
                    {/* {errors.required && <span><small className={styles.error}>El campo es requerido</small></span>} */}
                  </div>
                  <div className={styles.input}>
                    <CssTextField fullWidth InputLabelProps={{ shrink: true, }} label="Contenido de Alcohol" type="number" variant="outlined" {...register("alcohol_content", { required: true })} />
                    {/* {errors.required && <span><small className={styles.error}>El campo es requerido</small></span>} */}
                  </div>
                  <div className={styles.input}>
                    <CssTextField fullWidth InputLabelProps={{ shrink: true, }} label="País de Origen" variant="outlined" {...register("origin", { required: true })} />
                    {/* {errors.required && <span><small className={styles.error}>El campo es requerido</small></span>} */}
                  </div>
                  <div className={styles.input}>
                    <CssTextField fullWidth InputLabelProps={{ shrink: true, }} label="Precio" type="number" variant="outlined" {...register("price", { required: true })} />
                    {/* {errors.required && <span><small className={styles.error}>El campo es requerido</small></span>} */}
                  </div>
                  <div className={styles.input}>
                    <CssTextField fullWidth InputLabelProps={{ shrink: true, }} label="ID de Imagen" type="number" variant="outlined" {...register("image_id", { required: true })} />
                    {/* {errors.required && <span><small className={styles.error}>El campo es requerido</small></span>} */}
                  </div>
                  <div className={styles.input}>
                    <Button variant="contained" type="submit" >Crear Producto</Button>
                  </div>
                </form>
              </div>
            </div>
          </Grid>
        ) : <></>}
      </Grid>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<WrappedApp />, rootElement);
