import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(2) * 1,
  },
  margin: {
    height: theme.spacing(3),
  },
}));


const PrettoSlider = withStyles({
  root: {
    color: '#3f51b5',
    height: 8,
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 14,
    borderRadius: 8,
  },
  rail: {
    height: 14,
    borderRadius: 8,
  },
})(Slider);

export default function SliderInput() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.margin} />
            <PrettoSlider className="pl-4" valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={40} />
        </div>
    );
}
