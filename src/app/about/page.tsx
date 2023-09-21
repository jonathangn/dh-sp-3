"use client";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { createTheme, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Poppins } from "next/font/google";
import { NOSOTROS } from "@/data/data";
import InfoCardNosotros from "./InfoCardNosotros";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: poppins.style.fontFamily,
  },
});

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.nosotros}>
        <Grid container spacing={1} >
          <Grid xs className={styles.card}>
            <Typography
              fontWeight="bold"
              textAlign="center"
              className={styles.aboutCard}
            >
              Misión
            </Typography>
            <div className={styles.card}>
              En Bere Bere trabajamos para proporcionar a nuestros clientes una
              experiencia única en bebidas y licores al ofrecer una amplia gama de
              productos de alta calidad, brindando un servicio excepcional y
              promoviendo la responsabilidad en el consumo. Nos esforzamos por ser
              satisfacer los gustos de nuestros clientes y contribuir al disfrute
              responsable de las bebidas alcohólicas.
            </div>
          </Grid>
          <Grid xs className={styles.card}>
            <Typography
              fontWeight="bold"
              textAlign="center"
              className={styles.aboutCard}
            >
              Visión
            </Typography>
            <div className={styles.card}>
              En Bere Bere queremos ser reconocidos como líderes en la industria de
              bebidas y licores en nuestra ciudad, diferenciándonos por la calidad
              de nuestros productos y la excelencia en el servicio al cliente.
              Trabajamos en expandir nuestra presencia en nuevos mercados, innovar
              constantemente en nuestra oferta de productos y promover prácticas
              comerciales sostenibles.
            </div>
          </Grid>

          <Grid xs className={styles.card}>
            <Typography
              fontWeight="bold"
              textAlign="center"
              className={styles.aboutCard}
            >
              Política de calidad
            </Typography>
            <div className={styles.card}>
              En Bere Bere, estamos comprometidos con la entrega de productos y
              servicios de la más alta calidad. Nuestra política de calidad se
              basa en los siguientes principios: Calidad de los Productos,
              Cumplimiento, Servicio al Cliente, Responsabilidad en el Consumo,
              Mejora Continua y Sostenibilidad. En Bere Bere aplicamos la
              tecnologia al desarrollo y operacion de nuestro negocio para tener
              un mayor alcance y visibilidad de nuestro trabajo.
            </div>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <Typography
          fontWeight="bold"
          textAlign="center"
          style={{ fontSize: "xx-large", color: "teal", marginBottom: '2rem' }}
        >
          Nuestro equipo
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {NOSOTROS.map((c, i) => (
            <Grid key={c.name}>
              <InfoCardNosotros {...c} />
            </Grid>
          ))}
        </Grid>
      </div>
    </main >
  );
}
