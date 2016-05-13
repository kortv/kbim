import axios from 'axios';
export default function getStaticCont(path) {
  axios.get(path)
  .then((data) => {
    console.log(data);
    this.setState({
      staticCont: data.data,
    });
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
