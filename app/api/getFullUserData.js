import axios from 'axios';
import paths from './../constants/paths';

export default function getFullUserData(path) {
  const accessToken = localStorage.getItem('accessToken');
  axios.post(path || paths.user, { accessToken })
  .then((data) => {
    console.log(data);
    this.setState({
      userData: data.data,
    });
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
