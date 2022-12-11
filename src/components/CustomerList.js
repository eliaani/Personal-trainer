import React from "react";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";
import TrainingAdd from "./TrainingAdd";
import CSVexport from "./CSVexport";


export default function CustomerList(props) {

    const [customers, setCustomers] = useState([]);

    const columns = [
        { field: 'firstname', sortable: true, filter: true },
        { field: 'lastname', sortable: true, filter: true },
        { headerName: 'Address', field: 'streetaddress', sortable: true, filter: true },
        { headerName: 'Postal Code', field: 'postcode', sortable: true, filter: true },
        { field: 'city', sortable: true, filter: true },
        { field: 'email', sortable: true, filter: true },
        { field: 'phone', sortable: true, filter: true },
        { cellRenderer: params => <Button color='error' variant="outlined" startIcon={<DeleteIcon />} onClick={() => deleteCustomer(params.data)}>Delete</Button> },
        { cellRenderer: params => <EditCustomer data={params.data} editCustomer={editCustomer} /> },
        { valueGetter: (params) => params.data.links[0].href, cellRenderer: params => <TrainingAdd data={params.data} addTraining={addTraining} url={params.value} customer={params.data} /> },
    ]

    const fetchCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data.content))
    }

    const deleteCustomer = (data) => {
        if (window.confirm('Are you sure?')) {
            fetch(data.links[1].href, { method: 'DELETE' })
                .then(response => {
                    if (response.ok)
                        fetchCustomers();
                    else
                        alert('Something went wrong with the deletion');
                })
                .catch(err => console.error(err))
        }
    }

    const addCustomer = (customer) => {
        fetch("https://customerrest.herokuapp.com/api/customers", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(customer)
        })
            .then(response => {
                if (response.ok)
                    fetchCustomers();
                else
                    alert('Something went wrong with the addition!')
            })
            .catch(err => console.error(err))
    }

    const editCustomer = (customer, url) => {
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(customer)
        })
            .then(response => {
                if (response.ok)
                    fetchCustomers();
                else
                    alert('Something went wrong in editing!')
            })
            .catch(err => console.error(err))
    }

    const addTraining = (training) => {
        fetch("https://customerrest.herokuapp.com/api/trainings", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(training)
        })
            .then(response => {
                if (response.ok)
                    fetchCustomers();
                else
                    alert('Something went wrong adding the training!')
            })
            .catch(err => console.error(err))
    }

    useEffect(() => fetchCustomers(), []);

    return (
        <div>
            <CSVexport customers={customers} />
            <AddCustomer addCustomer={addCustomer} />
            <h1>Customer list</h1>
            <div className='ag-theme-material' style={{ height: 600, width: '100vw', margin: 'auto' }}>
                <AgGridReact
                    columnDefs={columns}
                    rowData={customers}
                    suppressCellFocus={true}
                >
                </AgGridReact>
            </div>
        </div>
    );
}