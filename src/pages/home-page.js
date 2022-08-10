import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import { AlertContext } from 'modules/alert/context/alert-context';
import { useContext } from 'react';
import { useAlertReducer } from 'modules/alert/hooks/use-alert-reducer';

export const HomePage = () => {

  const { addAlert, removeAlert, data } = useAlertReducer();

  console.log({data});
  
  const handleAddNewAlert = () => {
    addAlert({alertTitle: "Alert", text: "New Alert", link: "https://reactjs.org/blog/2022/03/29/react-v18.html"});
  }

  return (
    <Container sx={{marginTop: 20}}>
        <Button variant="contained" onClick={handleAddNewAlert}>Add New Alert</Button>
    </Container>
  );
}
