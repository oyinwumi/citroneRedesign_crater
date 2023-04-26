import axios from 'axios';

export default axios.create({
  baseURL: 'http://citrone.vercel.app',
});

// export default axios.create({
//   baseURL: 'https://citrone-crater-prod.up.railway.app',
// });
