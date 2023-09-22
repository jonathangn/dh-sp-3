"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "#112727",
        p: 3,
      }}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} className={styles.customGrid}>
            <div className={`${styles.h} ${styles.titleText}`}>Acerca de Bere Bere</div>
            <div className={`${styles.h} ${styles.smallTextNosotros}`}>
              Somos una plataforma de comercio especializada en la venta de
              bebidas para eventos. Ofrecemos una amplia selección de bebidas
              alcohólicas y no alcohólicas para satisfacer las necesidades de
              nuestros clientes en los diferentes tipos de eventos: como fiestas,
              celebraciones, bodas, reuniones corporativas y más.
            </div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <div className={`${styles.h} ${styles.titleText}`}>Contáctanos</div>
            <div className={`${styles.h} ${styles.smallText}`}>
              Avenida siempre viva, Springfield, USA
            </div>
            <div className={`${styles.h} ${styles.smallText}`}>
              Correo electrónico: info@berebere.com
            </div>
            <div className={`${styles.h} ${styles.smallText}`}>
              WhatsApp: +34 234 567890
            </div>
          </Grid>

          <Grid item xs={12} sm={4} className={styles.h}>
            <div className={`${styles.h} ${styles.titleTextRedes}`}>
              Síguenos
            </div>
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
            <div className={`${styles.h} ${styles.smallTextNosotros}`}>
              {"Derechos reservados © "}
              <Link color="inherit" href="https://berebere.com/">
                Bere Bere
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
