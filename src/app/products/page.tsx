// async function getProducts() {
//     // const MAIN_API = process.env.MAIN_API
//     // const res = await fetch(`${MAIN_API}/products`, { cache: 'no-store' })
//     // StaticData const res = await fetch(`http://localhost:3000/api/products`, { cache: 'force-cache' })
//     // DynamicData const res = await fetch(`http://localhost:3000/api/products`, { cache: 'no-store' })
//     //  const pizzas = await fetch("http://localhost:3000/api/products");
//     //  const orders = admin && await axios.get("http://localhost:3000/api/orders");
//     // const fetchProd = await import("../app/api/products/route.js", { cache: 'no-store' })
//     // const resProd = await fetchProd.GET()
//     // const products = await resProd.json()
//     // return products
//   }

// function Item(props) {

//     return (
//       <Paper style={{display:'flex', justifyContent:'center', flexDirection: 'column'}} >
//         {/* <h2>{props.item.name}</h2>
//         <p>{props.item.description}</p> */}
//         <img src={props.item.imageUrl} style={{maxHeight: '350px', width: '100vw', objectFit: 'cover'}} />
//         <Input disableUnderline style={{caretColor: 'red', background: 'white', borderRadius: '.5rem', position: 'relative', bottom: '6rem', padding: '.2rem', alignSelf:'center'}}> Muestrame</Input>

//         <Button style={{background: 'white', color: 'teal', position: 'relative', bottom: '5.5rem', width:'max-content', alignSelf:'center'}}>
//           Suscribirse
//         </Button>

//       </Paper>
//     )
//   }

import { PRODUCTS } from "@/data/data";
import { CATEGORIES } from "@/data/data";
import InfoCard from "@/components/InfoCard";
import Grid from "@mui/material/Unstable_Grid2";
import styles from "./page.module.css";
import { useEffect, useState, useContext } from "react";

const beers = PRODUCTS.filter((p) => p.category === "Cervezas");
const energizers = PRODUCTS.filter((p) => p.category === "Energizantes");

export default function Products() {
  // const [products, setProducts] = useState([]);

  // async function getProducts() {
  //   const response = await fetch('https://dummyjson.com/products')  // fetch the products
  //   const data = await response.json() // convert the response to json
  //   setProducts(data.products) // set the products in the state to the products we fetched
  // }

  // useEffect(() => {
  //   getProducts()
  // }, [])

  return (
    <>
      <Grid
        margin="auto"
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className={styles.gridCont}
      >
        {energizers.map((ref) => (
          <>
            <Grid justifyContent="center" xs={12} sm={6} md={4} key={ref.name}>
              <InfoCard {...ref} />
            </Grid>
            {/* <button
              className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Agregar
            </button> */}
          </>
        ))}
      </Grid>

      <Grid
        margin="auto"
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className={styles.gridCont}
      >
        {beers.map((ref) => (
          <>
            <Grid justifyContent="center" xs={12} sm={6} md={4} key={ref.name}>
              <InfoCard {...ref} />
            </Grid>
          </>
        ))}
      </Grid>

      {/* {CATEGORIES.map((category, i) => (
        <>
          <div>{category.title}</div>
        </>
      ))} */}
    </>
  );
}
