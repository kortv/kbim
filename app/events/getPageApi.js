import getCategory from './../api/getCategory';
import getStaticCont from './../api/getStaticCont';
import paths from './../constants/paths';


export default function getPageApi(path) {
  const mainPath = path.replace(/(\/\w+)(\/?.*)?/g, '$1');
  const secondPath = path.replace(/(\/\w+)(\/?.*)?\/?/g, '$2');
  console.log(secondPath);
  switch (mainPath) {
  case '/':
    getCategory.call(this, paths.main);
    break;

  case '/page':
    getCategory.call(this, paths.main);
    getStaticCont.call(this, `${paths.page}${secondPath}`);
    break;

  case '/category':
    getCategory.call(this, paths.main);
    break;

  default:
    console.log(path);

  }
}
