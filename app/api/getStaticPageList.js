import axios from 'axios';
export default function getStaticPageList() {
  axios.get('/app/JSON/staticpagelist.json')
  .then((data) => {
    console.log(data);
    const staticPageList = data.data.children;
    const staticOne = staticPageList.splice(0, 1)[0];
    this.setState({
      staticPageList, staticOne,
    });
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
