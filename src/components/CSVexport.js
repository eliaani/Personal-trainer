import React from 'react';
import { Button } from '@mui/material';
import { CSVLink } from 'react-csv';
import GetAppIcon from '@mui/icons-material/GetApp';

export default function CSVexport(props) {

    const csv = [
        { key: 'firstname' },
        { key: 'lastname' },
        { key: 'streetaddress' },
        { key: 'postcode' },
        { key: 'city' },
        { key: 'email' },
        { key: 'phone' }
    ]

    const headers = [
        { label: 'First name', key: 'firstname' },
        { label: 'Last name', key: 'lastname' },
        { label: 'Address', key: 'streetaddress' },
        { label: 'Postal code', key: 'postcode' },
        { label: 'City', key: 'city' },
        { label: 'Email', key: 'email' },
        { label: 'Phone', key: 'phone' }
    ]

    return (
        <CSVLink
            data={props.customers}
            headers={headers}
            csvData={csv}
            filename={'customers.csv'}
            separator={","}
            >
            <Button startIcon={<GetAppIcon />}>
                CSV file download
            </Button>
        </CSVLink>
    )
}