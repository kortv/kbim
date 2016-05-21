import axios from 'axios';
import getFullUserData from './getFullUserData';

export default function postChangeUser(path, body) {
  console.log(path, body);
  axios.post(path, body)
  .then((response) => {
    console.log(response);
    if (response.data.success) {
      getFullUserData.call(this);
    } else {
      alert(response.data.message);
    }
  }).catch((response) => {
    console.log(response);
    console.log(response.data);
  });
}
