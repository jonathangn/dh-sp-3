"use client";
import React from "react";
import ReactDOM from "react-dom";
// import { ThemeProvider } from "material-ui/styles";
// import theme from "./theme";
// import { Grid, Modal, Backdrop } from "material-ui/core";

import styles from "./page.module.css";
import Grid from "@mui/material/Unstable_Grid2";
import { Modal } from "@mui/material";
import Image from "next/image";
// import { makeStyles } from "@material-ui/styles";
// import GeneralSettings from "./GeneralSettiings";
import FormProfile from "../../components/profile/FormProfile";


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

export default function App() {
  const [isOpen, setisOpened] = React.useState(false);
  const [contact, setContact] = React.useState(profile);
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
              <Image src="/thirteen.svg" width={200} height={200} alt="person" ></Image>
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
      </Grid>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<WrappedApp />, rootElement);
