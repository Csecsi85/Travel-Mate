import React, {useState} from 'react';

// Material-UI 
import { makeStyles } from '@material-ui/core/styles';
import {FormControl, InputLabel } from '@material-ui/core';


const registerValues = {
    id: 0,
    fullName: '',
    mobile: '',
    city: '',
    registerDate: new Date()
}



const Register = () => {

    const [registerValues, setregisterValues] = useState();
    
    const useStyles = makeStyles((theme) => ({
            root: {
                 direction:"column", 
                 justify:"center",
                  alignItems:"center"
            },
            label: {
                padding: theme.spacing(2),
                textAlign: "center",
                color: "black",
                maxWidth: "60%", 
                background: "transparent"
            }
            }));
            const classes = useStyles()
    
    return (
        
        <div>
            <FormControl className={classes.root}>
                    <InputLabel className={classes.label} htmlFor="my-input">Email address</InputLabel>

            </FormControl>
        </div>
    )
} 

export default Register;


