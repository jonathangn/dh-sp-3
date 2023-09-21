'use client'
import { PRODUCTS as rawProducts } from "@/data/prod";
import { CATEGORIES, PRODUCTS } from "@/data/data";
import InfoCard from "@/components/InfoCard";
import Grid from "@mui/material/Unstable_Grid2";
import styles from "./page.module.css";
import { useEffect, useState, useContext } from "react";
import { TextField, Typography, styled } from "@mui/material";
import { useGlobalContext } from "@/contexts/store";
import { TProductApi, TProductCart } from "@/data/types";

// const beers = PRODUCTS.filter((p) => p.category === "Cervezas");
// const wines = PRODUCTS.filter((p) => p.category === "Vinos");
// const energizers = PRODUCTS.filter((p) => p.category === "Energizantes");

const CssTextField = styled(TextField)({
  background: 'white',
  border: '1px solid teal',
  borderRadius: '.5rem',
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
      border: 'none',
      fontFamily: 'Poppins',
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

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("")

  const PRODUCTS: TProductCart[] = []

  rawProducts.forEach((e: TProductApi) => {
    return PRODUCTS.push({ ...e, top: false, slug: e.name.replace(/ /g, '-'), quantity: 0 })
  });

  const { setProductsStore } = useGlobalContext()
  useEffect(() => {
    setProductsStore(PRODUCTS)
  }, [])
  // const drinks: string[] = ['beers', 'wines', 'energizers', 'coke', 'fernets', 'aguas', 'vodkas', 'shots', 'whiskys']
  // console.log(PRODUCTS, 'prods')
  const beers = PRODUCTS?.filter((p) => p.Category === "Cerveza")
  const wines = PRODUCTS?.filter((p) => p.Category === "Vino")
  const energizers = PRODUCTS?.filter((p) => p.Category === "Energizante")
  const cokes = PRODUCTS?.filter((p) => p.Category === "Gaseosa")
  const fernets = PRODUCTS?.filter((p) => p.Category === "Fernet")
  const aguas = PRODUCTS?.filter((p) => p.Category === "Aguardiente")
  const vodkas = PRODUCTS?.filter((p) => p.Category === "Vodka")
  const shots = PRODUCTS?.filter((p) => p.Category === "Tequila")
  const whiskys = PRODUCTS?.filter((p) => p.Category === "Whisky")

  if (PRODUCTS.length !== 0) {
    return (
      <main className={styles.main}>
        <CssTextField style={{ width: '50%', margin: 'auto', display: 'block', marginBottom: '3rem' }} type="text" placeholder="Buscar producto" onChange={(e) => { setSearchTerm(e.target.value) }} />
        <Typography className={styles.textTyp} id="Energizante">
          Energizante
        </Typography>
        <Grid
          id="energizers"
          margin="auto"
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className={styles.gridCont}
        >
          {energizers.filter((item) => {
            if (searchTerm == "") {
              return item
            } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return item
            }
          }).map((ref) => (
            <Grid justifyContent="center" xs={12} sm={6} md={4} key={ref.name}>
              <InfoCard  {...ref} />
            </Grid>
          ))}
        </Grid>

        <Typography className={styles.textTyp} id="Cerveza">
          Cerveza
        </Typography>
        <Grid
          id="beers"
          margin="auto"
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className={styles.gridCont}
        >
          {beers.filter((item) => {
            if (searchTerm == "") {
              return item
            } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return item
            }
          }).map((ref) => (
            <Grid justifyContent="center" xs={4} sm={6} md={4} key={ref.name}>
              <InfoCard  {...ref} />
            </Grid>
          ))}
        </Grid>

        <Typography className={styles.textTyp} id="Vino">
          Vino
        </Typography>
        <Grid
          id="wines"
          margin="auto"
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className={styles.gridCont}
        >
          {wines.filter((item) => {
            if (searchTerm == "") {
              return item
            } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return item
            }
          }).map((ref) => (
            <Grid justifyContent="center" xs={4} sm={6} md={4} key={ref.name}>
              <InfoCard  {...ref} />
            </Grid>
          ))}
        </Grid>


        <Typography className={styles.textTyp} id="Gaseosa">
          Gaseosa
        </Typography>
        <Grid
          id="cokes"
          margin="auto"
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className={styles.gridCont}
        >
          {cokes.filter((item) => {
            if (searchTerm == "") {
              return item
            } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return item
            }
          }).map((ref) => (
            <Grid justifyContent="center" xs={4} sm={6} md={4} key={ref.name}>
              <InfoCard  {...ref} />
            </Grid>
          ))}
        </Grid>


        <Typography className={styles.textTyp} id="Fernet">
          Fernet
        </Typography>
        <Grid
          id="fernets"
          margin="auto"
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className={styles.gridCont}
        >
          {fernets.filter((item) => {
            if (searchTerm == "") {
              return item
            } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return item
            }
          }).map((ref) => (
            <Grid justifyContent="center" xs={4} sm={6} md={4} key={ref.name}>
              <InfoCard  {...ref} />
            </Grid>
          ))}
        </Grid>


        <Typography className={styles.textTyp} id="Aguardiente">
          Aguardiente
        </Typography>
        <Grid
          id="aguas"
          margin="auto"
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className={styles.gridCont}
        >
          {aguas.filter((item) => {
            if (searchTerm == "") {
              return item
            } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return item
            }
          }).map((ref) => (
            <Grid justifyContent="center" xs={4} sm={6} md={4} key={ref.name}>
              <InfoCard  {...ref} />
            </Grid>
          ))}
        </Grid>


        <Typography className={styles.textTyp} id="Vodka">
          Vodka
        </Typography>
        <Grid
          id="vodkas"
          margin="auto"
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className={styles.gridCont}
        >
          {vodkas.filter((item) => {
            if (searchTerm == "") {
              return item
            } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return item
            }
          }).map((ref) => (
            <Grid justifyContent="center" xs={4} sm={6} md={4} key={ref.name}>
              <InfoCard  {...ref} />
            </Grid>
          ))}
        </Grid>


        <Typography className={styles.textTyp} id="Tequila">
          Tequila
        </Typography>
        <Grid
          id="shots"
          margin="auto"
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className={styles.gridCont}
        >
          {shots.filter((item) => {
            if (searchTerm == "") {
              return item
            } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return item
            }
          }).map((ref) => (
            <Grid justifyContent="center" xs={4} sm={6} md={4} key={ref.name}>
              <InfoCard  {...ref} />
            </Grid>
          ))}
        </Grid>

        <Typography className={styles.textTyp} id="Whiskey">
          Whiskey
        </Typography>
        <Grid
          id="whiskys"
          margin="auto"
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className={styles.gridCont}
        >
          {whiskys.filter((item) => {
            if (searchTerm == "") {
              return item
            } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return item
            }
          }).map((ref) => (
            <Grid justifyContent="center" xs={4} sm={6} md={4} key={ref.name}>
              <InfoCard  {...ref} />
            </Grid>
          ))}
        </Grid>
      </main>
    );
  } else {
    return <>Loading...</>
  }


}
