import * as React from 'react';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';


export const AlertComponent = ({item, handleRemoveAlert}) => {
    const handleCloseAlert = () => {
        handleRemoveAlert(item.id);
    }

    return (
        <Alert severity={item.type} style={{marginBottom: '10px'}}>
            <b>{item.alertTitle}</b> - <i>{item.link? (<a href={item.link}>{item.text}</a>): item.text}</i>
            <CloseIcon size="small" style={{position: "absolute", right: "20px"}} onClick={handleCloseAlert}/>
        </Alert>
    )
}