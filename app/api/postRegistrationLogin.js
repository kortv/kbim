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
    this.setState({
      isLogedIn: !!localStorage.getItem('accessToken'),
    });
    this.getFullUserData(paths.user);
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
