import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddCustomer(props) {
    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({})

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        setCustomer({});
    }

    const handleSave = () => {
        props.addCustomer(customer);
        setOpen(false);
        setCustomer({});
    }

    return (
        <div>
            <Button variant='outlined' onClick={handleClickOpen}>
                New Customer
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Enter Customer Info</DialogTitle>
                <DialogContent>
                    <TextField
                        margin='normal'
                        label='First name'
                        value={customer.firstname}
                        onChange={e => setCustomer({ ...customer, firstname: e.target.value })}
                        fullWidth
                    />
                    <TextField
                        margin='normal'
                        label='Last name'
                        value={customer.lastname}
                        onChange={e => setCustomer({ ...customer, lastname: e.target.value })}
                        fullWidth
                    />   <TextField
                        margin='normal'
                        label='Street address'
                        value={customer.streetaddress}
                        onChange={e => setCustomer({ ...customer, streetaddress: e.target.value })}
                        fullWidth
                    />   <TextField
                        margin='normal'
                        label='Post code'
                        value={customer.postcode}
                        onChange={e => setCustomer({ ...customer, postcode: e.target.value })}
                        fullWidth
                    />   <TextField
                        margin='normal'
                        label='City'
                        value={customer.city}
                        onChange={e => setCustomer({ ...customer, city: e.target.value })}
                        fullWidth
                    />   <TextField
                        margin='normal'
                        label='Email'
                        value={customer.email}
                        onChange={e => setCustomer({ ...customer, email: e.target.value })}
                        fullWidth
                    />   <TextField
                        margin='normal'
                        label='Phone'
                        value={customer.phone}
                        onChange={e => setCustomer({ ...customer, phone: e.target.value })}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}