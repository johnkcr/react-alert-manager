import * as React from 'react';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';


export const AlertComponent = ({item}) => {
    console.log({item});
    return (
        <Alert severity={item.type} style={{marginBottom: '10px'}}>
            <b>{item.alertTitle}</b> - <i>{item.text}</i>
            <CloseIcon />
        </Alert>
    )
}