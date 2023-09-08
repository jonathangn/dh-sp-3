'use client'
// import 'react-toastify/dist/ReactToastify.css'
// import { ToastContainer, toast } from 'react-toastify'
import { useGlobalContext } from '@/contexts/store'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function Cart({ }) {
  // const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('sm');
  const { cartItems, setCartItems, showModal, setShowModal, getCartTotal, addToCart, removeFromCart, clearCart } = useGlobalContext()

  const cartTotal = getCartTotal();
  const cartItemsLength = cartItems.length > 0 ?? false;

  const close = () => {
    setShowModal(false)
    console.log(cartItems)
  }

  //   const notifyRemovedFromCart = (item) => toast.error(`${item.title} removed from cart!`, {
  //     position: 'top-center',
  //     autoClose: 2000,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     theme: 'colored',
  //     style: {
  //       backgroundColor: '#000',
  //       color: '#fff'
  //     }
  //   })

  //   const notifyCartCleared = () => toast.error(`Cart cleared!`, {
  //     position: 'top-center',
  //     autoClose: 2000,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     theme: 'colored',
  //     style: {
  //       backgroundColor: '#000',
  //       color: '#fff'
  //     }
  //   })

  // const handleRemoveFromCart = (product) => {
  //   removeFromCart(product);
  // }

  {/* <ToastContainer /> */ }
  return (
    showModal && (
      <>
        <Dialog
          open={showModal}
          onClose={close}
        >
          <DialogTitle>Carrito de compras</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You can set my maximum width and whether to adapt or not.
            </DialogContentText>
            <Box
              noValidate
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                m: 'auto',
                width: 'fit-content',
              }}
            >
              <div>
                <h1>{`Total: ${cartTotal}`}</h1>
                <Button onClick={() => clearCart}>
                  Vaciar
                </Button>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  {cartItems.map((item) => (
                    <>
                      <ListItem
                        key={item?._id}
                        secondaryAction={
                          <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                          </IconButton>
                        }
                      >
                        {/* <ListItem alignItems="flex-start"> */}
                        <ListItemAvatar>
                          <Avatar alt={item?.name} src={item?.urlImg} />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Brunch this weekend?"
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                Ali Connors
                              </Typography>
                              {" — I'll be in your neighborhood doing errands this…"}
                              <div>
                                <Button onClick={() => addToCart(item)}>
                                  +
                                </Button>
                                <p>{item.quantity}</p>
                                <Button onClick={() => removeFromCart(item)}>
                                  -
                                </Button>
                              </div>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </>
                  ))}
                </List>
              </div>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={close}>Close</Button>
          </DialogActions>
        </Dialog >
      </>
    ))
}