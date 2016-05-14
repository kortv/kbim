import axios from 'axios';

export default function postRegistrationLogin(path, body) {
  axios.post(path, body)
  .then((data) => {
    console.log(data);
    if (data) {
      $('#companyModal').modal('hide');
    }
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
