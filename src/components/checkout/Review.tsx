import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useGlobalContext } from '@/contexts/store';

export default function Review() {

    const { cartItems, getCartTotal } = useGlobalContext()
    const cartTotal = getCartTotal()

    return (
        <>
            <List disablePadding>
                {cartItems.map((product) => (
                    <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={product.name} secondary={product.quantity} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {`Total: $ ${cartTotal}`}
                    </Typography>
                </ListItem>
            </List>
        </>
    );
}