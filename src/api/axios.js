import axios from 'axios';

export default axios.create({
  baseURL: 'https://citrone.vercel.app'
});

// export default axios.create({
//   baseURL: 'https://citrone-crater-prod.up.railway.app',
// });
