import postChangeUser from './../api/postChangeUser';
import paths from './../constants/paths';

export default function handleCompanySubmit(e) {
  e.preventDefault();
  console.log(e.target);
  const target = e.currentTarget;
  const input = target.querySelector('input, textarea');
  const value = !!input.value;
  const pathName = target.name;
  const accessToken = localStorage.getItem('accessToken');

  const body = { value, accessToken };
  const type = input.getAttribute('data-slug');
  body.type = type;
  console.log(value);


  postChangeUser.call(this,
    `${paths.host}/api/company/${pathName}`,
    body
  );
}
