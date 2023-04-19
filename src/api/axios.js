import axios from 'axios';

export default axios.create({
  baseURL: 'https://citrone-crater-prod.up.railway.app',
});

// export default axios.create({
//   baseURL: 'http://localhost:3500',
// });
