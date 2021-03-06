import getStaticCont from './../api/getStaticCont';
import paths from './../constants/paths';


export default function getPageApi(path) {
  const mainPath = path.replace(/(\/\w+)(\/?.*)?/g, '$1');
  const secondPath = path.replace(/(\/\w+)(\/?.*)?\/?/g, '$2');
  console.log(secondPath);
  if (mainPath === '/page') {
    getStaticCont.call(this, `${paths.page}${secondPath}`);
  }
}
