import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://vue-practice-4455d.firebaseio.com/',
});

instance.defaults.headers.common['SOMETHING'] = 'SOMETHING';

export default instance;
