import axios from 'axios';
import paths from './../constants/paths';

export default function getFullUserData(path) {
  const accessToken = localStorage.getItem('accessToken');
  console.log(path, accessToken);
  axios.post(path || paths.userdata, { accessToken })
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
