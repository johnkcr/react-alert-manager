import { useAlertReducer } from "modules/alert/hooks/use-alert-reducer";
import Stack from '@mui/material/Stack';
import { AlertComponent } from "./alert-component";
import { ListItem } from "@mui/material";

export const AlertManager = () => {
    const { data, removeAlert } = useAlertReducer();

    return (
        <div style={{
            position: "fixed",
            width: "300px",
            right: 0,
            top: 0
            }}
        >
            {data.map(item => <AlertComponent key={item.id} item={item} handleRemoveAlert={removeAlert}/>)}
        </div>
    )
}