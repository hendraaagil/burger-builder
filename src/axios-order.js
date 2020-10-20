import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-b13be.firebaseio.com/',
});

export default instance;
