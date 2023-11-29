import axios from 'axios';
import { AppThunk } from './';

export const CALCULATE_SUCCESS = 'CALCULATE_SUCCESS';
export const CALCULATE_FAILURE = 'CALCULATE_FAILURE';

const BASE_URL = 'http://localhost:8000';

export const calculateExpression = (expression: string): AppThunk => async dispatch => {
    try {
      const response = await axios.post(`${BASE_URL}/api/calculate/`, { expression });
      dispatch({ type: CALCULATE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: CALCULATE_FAILURE });
    }
};
