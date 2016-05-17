import axios from 'axios';

export default function postChangeUser(path, body) {
  axios.post(path, body)
  .then((response) => {
    console.log(response);
  }).catch((response) => {
    console.log(response);
    console.log(response.data);
  });
}
