import postChangeUser from './../api/postChangeUser';

export default function onFile(e) {
  console.log(e.target);
  const file = e.target.files[0];

  if (file) {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('accessToken', localStorage.getItem('accessToken'));

    postChangeUser.call(this, 'http://kbim.com.ua/api/user/main_img', formData);
  } else {
    console.log(e.target.files[0]);
  }
}
