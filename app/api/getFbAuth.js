import axios from 'axios';
import paths from './../constants/paths';

export default function getFbAuth() {
  axios.get(paths.fbAuth)
  .then((data) => {
    console.log(data);
    // this.setState({
    //   category: data.data.children,
    // });
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
