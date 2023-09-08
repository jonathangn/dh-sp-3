'use client'
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        // backgroundColor: (theme) =>
        //   theme.palette.mode === "light"
        //     ? theme.palette.grey[200]
        //     : theme.palette.grey[800],
        // p: 6,
        background: "linear-gradient(360deg, rgb(0, 128, 128), rgb(47, 97, 100) 99%, black)",
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} >
            <Typography variant="h6" className={styles.h} color="text.primary" gutterBottom>
              Acerca de
            </Typography>
            <Typography variant="body2" className={styles.h} color="text.secondary">
              Somos el equipo BereBere, y presentamos este proyecto para aprobar la cursada en DH. Elegimos un Ecommerce donde comercializamos bebidas con y sin alcohól principalmente para eventos.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} >
            <Typography variant="h6" className={styles.h}  color="text.primary" gutterBottom>
              Contáctanos
            </Typography>
            <Typography variant="body2" className={styles.h} color="text.secondary">
              Avenida siempre viva, Springfield, USA
            </Typography>
            <Typography variant="body2" className={styles.h} color="text.secondary">
              Correo electrónico: info@berebere.com
            </Typography>
            <Typography variant="body2" className={styles.h} color="text.secondary">
              WhatsApp: +34 234 567890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} className={styles.h}>
            <Typography variant="h6" className={styles.h} color="text.primary" gutterBottom>
              Síguenos
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography className={styles.h}  variant="body2" color="text.secondary" align="center">
            {"Derechos reservados © "}
            <Link color="inherit" href="https://berebere.com/">
              Bere Bere
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}