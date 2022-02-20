import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './Header.css'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchAppBar(props) {
    const [value, setValue] = React.useState("")
    const places = ["Delhi", "London", "Bengaluru"]

    const onChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleSearch=()=>{
        if(value != ""){props.handleLocation(value)}
    }
    return (
        <AppBar position="relative">
            <div className='topBar'>
                <h1>Maps UI</h1>
                <Autocomplete
                    value={value}
                    onChange={onChange}
                    id="combo-box-demo"
                    options={places}
                    sx={{ width: "30%", margin: "10px", background: "#fff" }}
                    renderInput={(params) => <TextField {...params} label="Search" />}
                />
                <IconButton onClick={handleSearch} sx={{height:'40px',color:"#fff"}}><SearchIcon/></IconButton>
            </div>
        </AppBar>
    );
}
