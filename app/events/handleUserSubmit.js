import postChangeUser from './../api/postChangeUser';
import paths from './../constants/paths';

export default function handleUserSubmit(e) {
  e.preventDefault();
  console.log(e.target);
  const target = e.currentTarget;
  const input = target.querySelector('input, textarea');
  const value = input.getAttribute('data-value') || input.value;
  let pathName = target.name;
  const accessToken = localStorage.getItem('accessToken');

  const body = { value, accessToken };
  const slug = input.getAttribute('data-slug');
  if (slug) {
    body.slug = slug;
  } else {
    pathName = `personal/${pathName}`;
  }
  console.log(value);


  postChangeUser.call(this,
    `${paths.user}/${pathName}`,
    body
  );
}
