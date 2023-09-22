'use client'
import { useGlobalContext } from '@/contexts/store'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircle from '@mui/icons-material/AddBox';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import { TProductCart } from '@/data/types';
import Typography from '@mui/material/Typography';
import { Poppins } from 'next/font/google';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import styles from './Cart.module.css'
import { useRouter } from 'next/navigation';

export default function Cart({ }) {

  const router = useRouter()
  const { cartItems, showModal, setShowModal, getCartTotal, addToCart, removeFromCart, removeReference, clearCart } = useGlobalContext()

  const cartTotal = getCartTotal();

  const close = () => {
    setShowModal(false)
  }

  const goToCheckout = () => {
    router.push('/checkout')
    setShowModal(false)
  }

  return (
    showModal && (
      <>
        <Dialog
          open={showModal}
          onClose={close}
          maxWidth={'md'}
        >
          <DialogTitle>
            <Typography style={{
              display: 'flex', alignItems: 'center', fontFamily: 'Poppins', fontWeight: '500', justifyContent: 'space-between'
            }}>
              CARRITO DE COMPRA
              <Button style={{ color: 'teal' }} onClick={() => clearCart([])}>
                <ClearAllIcon />
              </Button>
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Box
              noValidate
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                m: 'auto',
                width: 'md',
              }}
            >
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {cartItems.map((item: TProductCart) => (

                  <ListItem
                    key={item?.id}
                    secondaryAction={
                      <IconButton onClick={() => removeReference(item)} edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    }
                    style={{ justifyContent: 'space-between' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img alt={item?.name} src={item?.image_id} className={styles.cartImg} />
                      <Typography variant='h6' style={{ fontFamily: 'poppins' }}>{item.name}</Typography>
                    </div>
                    <div style={{ display: 'flex', marginLeft: '2rem' }}>
                      <Typography variant='h5' className={styles.nthItems}>{item.quantity}</Typography>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Button style={{ color: 'teal' }} onClick={() => addToCart(item)}>
                          <AddCircle />
                        </Button>
                        <Button style={{ color: 'teal' }} onClick={() => removeFromCart(item)}>
                          <RemoveCircleIcon />
                        </Button>
                      </div>
                    </div>
                  </ListItem>
                ))}
              </List>
            </Box>
          </DialogContent>
          <DialogTitle className={styles.total}>
            {`Total: ${cartTotal}`}
          </DialogTitle>
          <DialogActions className={styles.actions}>
            <Button className={styles.action} onClick={close}>Cerrar</Button>
            <Button className={styles.action} onClick={goToCheckout}>Pagar</Button>
          </DialogActions>
        </Dialog >
      </>
    ))
}