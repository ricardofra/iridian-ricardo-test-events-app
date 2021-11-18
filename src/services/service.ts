import axios from 'axios';

export const getData = async () => {
  return await axios({
    method: 'get',
    url: 'http://www.mocky.io/v2/59f08692310000b4130e9f71',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
