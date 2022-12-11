import React from "react";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import moment from 'moment';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TrainingList(props) {

    const [trainings, setTrainings] = useState([]);

    const columns = [
        { field: 'date', sortable: true, filter: true, valueFormatter: function (params) { return moment(params.value).format('DD-MM-YYYY, HH:MM'); } },
        { field: 'duration', sortable: true, filter: true },
        { field: 'activity', sortable: true, filter: true },
        { field: 'customer.firstname', headerName: 'Customer (first name)', sortable: true, filter: true },
        { field: 'customer.lastname', headerName: 'Customer (last name)', sortable: true, filter: true },
        { cellRenderer: params => <Button variant="outlined" color='error' startIcon={<DeleteIcon />} onClick={() => deleteTraining(params.data.id)}>Delete</Button> },
    ]

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
            .then(response => response.json())
            .then(data => setTrainings(data))
    }

    const deleteTraining = (id) => {
        if (window.confirm('Are you sure you want to delete this training?')) {
            fetch("https://customerrest.herokuapp.com/api/trainings/" + id, { method: 'DELETE' })
                .then(response => {
                    if (response.ok)
                        fetchTrainings();
                    else
                        alert('Something went wrong in deletion');
                })
                .catch(err => console.error(err))
        }
    }

    useEffect(() => fetchTrainings(), []);

    return (
        <div>
            <h1>Training list</h1>
            <div className='ag-theme-material' style={{ height: 600, width: '70vw', margin: 'auto' }}>
                <AgGridReact
                    columnDefs={columns}
                    rowData={trainings}
                    suppressCellFocus={true}
                >
                </AgGridReact>
            </div>
        </div>
    );
}