import postChangeUser from './../api/postChangeUser';
import paths from './../constants/paths';

export default function onFile(e) {
  console.log(e.target);
  const file = e.target.files[0];

  if (file) {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('accessToken', localStorage.getItem('accessToken'));

    postChangeUser.call(this, `${paths.user}/main_img`, formData);
  } else {
    console.log(e.target.files[0]);
  }
}
