import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Home from './Home';
import TrainingList from './TrainingList';
import CustomerList from './CustomerList';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';

function Navigation() {
    const [value, setValue] = useState('1');
    const handleChange = (event, value) => {
        setValue(value);
    };
    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab icon={<HomeIcon />} value='1' label='Home' />
                <Tab icon={<SportsMartialArtsIcon />} value='2' label='Training' />
                <Tab icon={<GroupIcon />} value='3' label='Customers' />

            </Tabs>
            {value === '1' && <Home />}
            {value === '2' && <TrainingList />}
            {value === '3' && <CustomerList />}
        </div>
    );
}

export default Navigation;