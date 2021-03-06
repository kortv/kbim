import axios from 'axios';
import paths from './../constants/paths';


export default function getUserData(path) {
  axios.get(path || paths.user)
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
