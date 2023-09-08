"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import SearchIcon from "@mui/icons-material/Search";
import AdbIcon from "@mui/icons-material/Adb";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import { teal, purple } from "@mui/material/colors";
import { createTheme, makeStyles, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import styles from "./NavBar.module.css";
import { inherits } from "util";
import { Josefin_Sans } from "next/font/google";
import { useGlobalContext } from "@/contexts/store";

const pages = ["Inicio", "Productos", "Eventos", "Promociones", "Blog"];
const settings = ["Cuenta", "Dashboard", "Cerrar sesión"];

const josefin_Sans = Josefin_Sans({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: purple,
  },
  typography: {
    fontSize: 16,
    fontFamily: josefin_Sans.style.fontFamily,
  },
});

// const useStyles = makeStyles({
//   button: {
//     "&.active": {
//       background: "black",
//     },
//   },
// });

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const { userId, cartItems, showModal, setShowModal } = useGlobalContext();

  let itemsNumber = cartItems.length

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenModal = (event: React.MouseEvent<HTMLElement>) => {
    setShowModal(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pathname = usePathname();

  return (
    <AppBar
      position="static"
      // theme={theme}
      style={{
        color: "whitesmoke",
        fontSize: "xx-large",
        background: "linear-gradient(#008080, #2f6164 )",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          style={{ justifyContent: "center" }}
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/images/brand/logo-berebere.png"
            style={{ width: "60px", height: "60px", border: "2px solid white" }}
            sx={{ display: { xs: "none", md: "flex" } }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Link href="/">Inicio</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/products">Productos</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/offers">Ofertas</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/about">Nosotros</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/blog">Blog</Link>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            // component="h2"
            // variant="h5"
            // color="inherit"
            // align="center"
            // noWrap
            // sx={{ flex: 1 }}
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/images/brand/logo-berebere.png"
              style={{
                width: "60px",
                height: "60px",
                border: "2px solid white",
              }}
            />
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            style={{
              justifyContent: "center",
              gap: "1rem",
              minHeight: "inherit",
            }}
          >
            <Link
              href="/"
              className={`${pathname == "/" ? styles.active : ""} ${styles.link
                }`}
            >
              <Typography fontWeight="bold" textAlign="center" >
                Inicio
              </Typography>
            </Link>

            <Link
              href="/products"
              className={`${pathname == "/products" ? styles.active : ""} ${styles.link
                }`}
            >
              <Typography fontWeight="bold" textAlign="center" >
                Productos
              </Typography>
            </Link>

            <Link
              href="/offers"
              className={`${pathname == "/offers" ? styles.active : ""} ${styles.link
                }`}
            >
              <Typography fontWeight="bold" textAlign="center" >
                Ofertas
              </Typography>
            </Link>

            <Link
              href="/about"
              className={`${pathname == "/about" ? styles.active : ""} ${styles.link
                }`}
            >
              <Typography fontWeight="bold" textAlign="center" >
                Nosotros
              </Typography>
            </Link>

            <Link
              href="/blog"
              className={`${pathname == "/blog" ? styles.active : ""} ${styles.link
                }`}
            >
              <Typography fontWeight="bold" textAlign="center" >
                Blog
              </Typography>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <>
                <IconButton onClick={handleOpenModal} sx={{ p: 0 }}>
                  <Avatar className={styles.cart} alt="Remy Sharp" src="/images/avatar/cart.jpg" />
                  <div className={styles.iconCont}><span className={styles.iconNumb}>{itemsNumber}</span></div>
                </IconButton>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/images/avatar/2.jpg" />
                </IconButton>
              </>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings?.map((setting) => (
                <MenuItem component={Link} href={`/${setting}`} key={setting}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;