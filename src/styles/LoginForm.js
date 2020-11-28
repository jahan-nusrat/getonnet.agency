import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(0),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(1),
          width: '35ch',
          backgroundColor: '#5F2EEA'
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '35ch',
        },
      },
  }));

export default useStyles;