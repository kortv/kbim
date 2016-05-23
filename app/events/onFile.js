import postChangeUser from './../api/postChangeUser';
import paths from './../constants/paths';

export default function onFile(e) {
  const target = e.target;
  console.log(e.target);
  const file = target.files[0];

  if (file) {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('accessToken', localStorage.getItem('accessToken'));

    postChangeUser.call(this, `${paths.host}/api/${target.name}`, formData);
  } else {
    console.log(target.files[0]);
  }
}
