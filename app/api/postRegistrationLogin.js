import axios from 'axios';
import paths from './../constants/paths';

export default function postRegistrationLogin(path, body) {
  axios.post(path, body)
  .then((data) => {
    console.log(data);
    localStorage.setItem('accessToken', data.data.accessToken);
    if (data.data.signup) {
      $('#registrationModal').modal('hide');
      $('#companyModal').modal();
    } else if (data.data.signin) {
      $('#loginModal').modal('hide');
    } else alert(data.data.message);
    const person = [{
      main_img: data.data.mainImg,
      name: data.data.mainName,
      company_name: data.data.is_company && data.data.mainName,
    }];
    this.setState({
      isLogedIn: !!localStorage.getItem('accessToken'),
      person,
    });
    this.getFullUserData(paths.userdata);
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
