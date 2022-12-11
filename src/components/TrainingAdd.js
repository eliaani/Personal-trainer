import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import moment from 'moment';

export default function TrainingAdd(props) {
    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({});

    const handleClickOpen = () => {
        setTraining({
            ...training,
            customer: props.url,
            date: moment().format('DD/MM/YYYY HH:mm')
        });
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        props.addTraining(training);
        setOpen(false);
    }

    return (
        <>
            <Button variant='outlined' onClick={handleClickOpen}>
                Add Training
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Enter new training info</DialogTitle>
                <DialogContent>
                    <TextField
                        margin='normal'
                        label='Date'
                        type='datetime-local'
                        value={training.date}
                        onChange={e => setTraining({ ...training, date: e.target.value })}
                        fullWidth
                    />
                    <TextField
                        margin='normal'
                        label='Duration'
                        value={training.duration}
                        onChange={e => setTraining({ ...training, duration: e.target.value })}
                        fullWidth
                    />   <TextField
                        margin='normal'
                        label='Activity'
                        value={training.activity}
                        onChange={e => setTraining({ ...training, activity: e.target.value })}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}