import React, { useState } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import StyledRadio from './StyledRadio';
import Toggles from './Toggle';
import {FaPlus,FaMinus} from 'react-icons/fa'
import '../../../styles/button.css';

const InputGroup = () => {
    const [count,setCount] = useState({num:1})
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: true,
    });

    const increment=()=>{
        setCount({num:count.num+1})
    }

    const decrement=()=>{
        setCount({num:count.num-1})
    }
    
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div className="input-group row justify-content-between">
            <div className="col-md-6 text-center">
                <div className="left">
                    <FormControlLabel
                        control={
                            <Checkbox 
                                icon={<CircleUnchecked style={{height:'35px', width:'35px'}} />} 
                                checkedIcon={<CircleCheckedFilled style={{height:'35px', width:'35px'}} />} 
                                checked={state.checkedA} 
                                onChange={handleChange} 
                                name="checkedA" 
                                color="primary" 
                            />
                        }
                    />
                    <FormControlLabel
                        control={
                            <Checkbox 
                                icon={<CircleUnchecked style={{height:'35px', width:'35px'}} />} 
                                checkedIcon={<CircleCheckedFilled style={{height:'35px', width:'35px'}} />} 
                                checked={state.checkedB} 
                                onChange={handleChange} 
                                name="checkedB" 
                                color="primary" 
                            />
                        }
                    />
                </div>
                <div className="right">
                    <Toggles />
                </div>
            </div>
            <div className="col-md-6 text-right">
                <div className="right text-right">
                    <FormControlLabel control={<StyledRadio />} />
                    <FormControlLabel control={<StyledRadio />} />
                </div>
                <div className="left count-btn d-flex align-items-center mt-2">
                    <button className="btn" onClick={decrement}><FaMinus className="math-icon" /></button>
                    <p className="mb-0 count">{count.num}</p>
                    <button className="btn" onClick={increment}><FaPlus className="math-icon" /></button>
                </div>
            </div>
        </div>
    )
}

export default InputGroup
