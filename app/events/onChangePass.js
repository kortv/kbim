import postChangeUser from './../api/postChangeUser';
import paths from './../constants/paths';
import md5 from 'js-md5';

export default function onChangePass(e) {
  e.preventDefault();
  console.log(e.target);
  const target = e.currentTarget;
  const inputs = target.querySelectorAll('input');
  const pathName = target.name;
  const accessToken = localStorage.getItem('accessToken');
  const body = { accessToken };
  let test = true;
  [...inputs].forEach((el) => {
    if (!body[el.name]) {
      body[el.name] = el.value;
    } else {
      if (body[el.name] !== el.value) {
        alert('пароли не совпадают');
        test = false;
      }
    }
  });
  let hardEnough = body.new && /[A-Z]/.test(body.new);
  hardEnough = hardEnough && /[a-z]/.test(body.new);
  hardEnough = hardEnough && /\d/.test(body.new);
  hardEnough = hardEnough && body.new.length > 7;
  if (!hardEnough) alert('password hard is not enough');
  if (test) {
    console.log(body, `${paths.user}/${pathName}`);
    body.old = md5(body.old);
    body.new = md5(body.new);

    postChangeUser.call(this,
      `${paths.user}/${pathName}`,
      body
    );
  }
}
