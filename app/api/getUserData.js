import axios from 'axios';
export default function getUserData(path) {
  axios.get(path)
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
