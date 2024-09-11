import axios from 'axios';
  export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'587302c03f804c689443706c72ef6726'
    }
  })