import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../../styles/search.style.scss';

const useStyles = makeStyles((theme) => ({
    formControl: {
      marginTop: 30,
      minWidth: 210,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    select:{
        borderRadius:'20px',
        border:'1px solid transparent',
        '&:before':{
            borderBottom: '1px solid transparent'
        },
        '&:hover':{
            '&:before':{
                borderBottom: '1px solid transparent'
            }
        }
    }
  }));

const DropDown = () => {
    const classes = useStyles();
  const [vegetables, setVegetables] = React.useState('');

  const handleChange = (event) => {
    setVegetables(event.target.value);
  };
    return (
        <>
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel >Vegetables</InputLabel>
            <Select
                value={vegetables}
                onChange={handleChange}
                label="Vegetables"
                className={classes.select}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Turnips</MenuItem>
                <MenuItem value={20}>Squash</MenuItem>
                <MenuItem value={30}>Broccoli</MenuItem>
                <MenuItem value={40}>Spinach</MenuItem>
            </Select>
        </FormControl>
        </>
    )
}

export default DropDown
