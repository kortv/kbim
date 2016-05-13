import axios from 'axios';
export default function getStaticPageList() {
  axios.get('/app/JSON/staticpagelist.json')
  .then((data) => {
    console.log(data);
    this.setState({
      staticPageList: data.data.children,
    });
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
