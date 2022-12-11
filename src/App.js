import './App.css';
import Navigation from './components/Navigation';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className='App'>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            Personal trainer
          </Typography>
        </Toolbar>
      </AppBar>
      <Navigation />
    </div>
  )
}

export default App;