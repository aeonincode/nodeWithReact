import axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => {
  // make get request to backend
  axios.get('/api/current_user');
};
