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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { teal, purple } from "@mui/material/colors";
import { createTheme, makeStyles, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./NavBar.module.css";
import { useGlobalContext } from "@/contexts/store";
import { Poppins } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";

const poppins = Poppins({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

function NavBar() {
  const { data: session } = useSession()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const { cartItems, setShowModal } = useGlobalContext();

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
              <Link
                href="/"
                className={`${pathname == "/" ? styles.activeMov : ""} ${styles.linkMov
                  }`}
              >
                <Typography fontWeight="bold" textAlign="center" >
                  Inicio
                </Typography>
              </Link>

              <Link
                href="/products"
                className={`${pathname == "/products" ? styles.activeMov : ""} ${styles.linkMov
                  }`}
              >
                <Typography fontWeight="bold" textAlign="center" >
                  Productos
                </Typography>
              </Link>
              <Link
                href="/about"
                className={`${pathname == "/about" ? styles.activeMov : ""} ${styles.link
                  }`}
              >
                <Typography fontWeight="bold" textAlign="center" >
                  Nosotros
                </Typography>
              </Link>

              <Link
                href="/blog"
                className={`${pathname == "/blog" ? styles.activeMov : ""} ${styles.link
                  }`}
              >
                <Typography fontWeight="bold" textAlign="center" >
                  Blog
                </Typography>
              </Link>
            </Menu>
          </Box>
          <Typography
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
                <IconButton onClick={handleOpenModal} className={styles.cartBtn} sx={{ p: 0 }}>
                  <Avatar className={styles.cart} alt="cart icon" src="/images/avatar/cart.jpg" />
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
            >{
                session?.user ? (
                  <>
                    <MenuItem component={Link} href={`/profile`}>
                      <Typography textAlign="center">Mi Perfil</Typography>
                    </MenuItem>
                    {session?.user?.user?.Role === 'admin' ? (
                      <MenuItem component={Link} href={`/dashboard`}>
                        <Typography textAlign="center">Reportes</Typography>
                      </MenuItem>
                    ) : <></>}
                    <MenuItem component={Button} onClick={() => signOut()}>
                      <Typography textAlign="center" textTransform="none">Cerrar sesión</Typography>
                    </MenuItem>
                  </>
                ) :
                  <MenuItem component={Link} href={`/auth`}>
                    <Typography textAlign="center">Iniciar sesión</Typography>
                  </MenuItem>
              }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
