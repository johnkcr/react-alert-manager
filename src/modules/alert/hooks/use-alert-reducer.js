import { useContext } from "react";
import { AlertContext } from "../context/alert-context";
import { ACTION_ADD_NEW_ALERT, ACTION_REMOVE_ALERT, ALERT_TYPES } from '../constants';
import { v4 as uuidv4 } from 'uuid';

export const useAlertReducer = () => {
    const { state, dispatch } = useContext(AlertContext);

    const addAlert = (data) => {
        const item = {id: uuidv4(), startTime: new Date(), timeLimit: 10, text: '', link: '', alertType: ALERT_TYPES.Success, alertTitle: '', ...data}
        dispatch({ type: ACTION_ADD_NEW_ALERT, payload: item });
        setTimeout(() => {
            removeAlert(item.id * 1000);
        }, item.timeLimit);
    }

    const removeAlert = (id) => {
        dispatch({ type: ACTION_REMOVE_ALERT, payload: {id} });
    }

    return {data: state.data , dispatch, addAlert, removeAlert };
}