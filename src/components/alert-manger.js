import { useAlertReducer } from "modules/alert/hooks/use-alert-reducer";
import Stack from '@mui/material/Stack';
import { AlertComponent } from "./alert-component";
import { ListItem } from "@mui/material";

export const AlertManager = () => {
    const { data } = useAlertReducer();

    return (
        <div>
            {data.map(item => <AlertComponent key={item.id} item={item} />)}
        </div>
    )
}