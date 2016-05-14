import postRegistrationLogin from './../api/postRegistrationLogin';
import md5 from 'js-md5';
import paths from './../constants/paths';

export default function handleRegistrationLogin(e) {
  e.preventDefault();
  const targetForm = e.target;
  const formInputsDataAll = targetForm.querySelectorAll('input');
  const postBody = {};
  let path = '';
  let mainName = '';
  let mainMsg = '';
  [...formInputsDataAll].forEach((obj) => {
    postBody[obj.name] = obj.value;
  });
  postBody.password = md5(postBody.password);
  if (targetForm.name) {
    postBody.type = targetForm.name;
    path = paths.registration;
  } else {
    path = paths.login;
  }
  if (targetForm.name && targetForm.name === 'user') {
    mainName = postBody.first_name;
    mainMsg = 'Abbiamo bisogno di qualche informazione in più per aiutarti a' +
    ' partecipare ai contest più adatti';
  } else if (targetForm.name && targetForm.name === 'company') {
    mainName = postBody.company_name;
    mainMsg = 'Abbiamo bisogno di qualche informazione per aiutarti a' +
    ' creare i contest adatti. Scegli le categorie di interesse';
  }

  if (mainName && mainMsg) {
    this.setState({
      mainName, mainMsg,
    });
  }
  console.log(postBody);
  postRegistrationLogin.call(this, path, postBody);
}
