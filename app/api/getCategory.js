import axios from 'axios';
export default function getCategory(path) {
  axios.get(path)
  .then((data) => {
    console.log(data);
    this.setState({
      category: data.data.children,
    });
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
