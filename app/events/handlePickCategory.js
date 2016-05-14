import postPickCategory from './../api/postPickCategory';
import paths from './../constants/paths';

export default function handlePickCategory(e) {
  e.preventDefault();
  const targetForm = e.target;
  const formInputsDataAll = targetForm.querySelectorAll('input');
  const path = paths.user;
  const accessToken = localStorage.getItem('accessToken');
  const category = [...formInputsDataAll].filter((obj) => obj.checked).
  map((obj) => ({ id: obj.name }));
  const postBody = { accessToken, category };

  console.log(postBody, path);
  postPickCategory.call(this, path, postBody);
}
