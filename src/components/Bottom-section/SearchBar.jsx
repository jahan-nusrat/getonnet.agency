import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import '../../styles/bottom.css'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 700,
        height:64
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SearchBar = () => {
    const classes = useStyles();
    return (
        <TextField
            id="outlined-search" 
            type="search" 
            variant="filled"
            className={classes.formControl}
            InputProps={{
                startAdornment: (
                    <InputAdornment className={classes.select}>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )
}

export default SearchBar
