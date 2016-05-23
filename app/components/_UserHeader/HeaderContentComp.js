import React from 'react';
import user from './../../constants/initialUserData';
import paths from './../../constants/paths';

export default function HeaderContentComp({
  category, onFile, personal, isEdit, specialization,
}) {
  const person = personal.length ? personal[0] : user.personal[0];
  const spec = specialization.length ? specialization[0] : user.specialization[0];
  const specList = category.length ? category.map((obj) => (
    <li key={obj.id}>
      <a href={`/category/${obj.slug}`} className={spec[obj.slug] ? '' : 'not-active'}>
        <span className='circle-icon '>
          <img src={obj.icon_img} />
        </span>
      </a>
    </li>
  )) : <li />;
  return (

    <div
    className='container header-container public-company-header'
    style={{ backgroundImage:
      `linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.53) 100%), url("${person.logo_img ?
        `${paths.host}/${person.logo_img}` : ''}")`,
    }}
    >
      <div className='row'>
        <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12 logo-social-wrap'>

          {isEdit && <a href='#'>
            <div className='edit-photos edit-company-background'>
              <input
              className='custom-file-input-pic head-bg' onChange={onFile} type='file'
              name='company/logo_img'
              />
            +</div></a>}

          <div className='big-company-logo'>
          {isEdit && <a href='#'>
            <input
            className='custom-file-input-pic' onChange={onFile} type='file'
            name='company/main_img'
            />
            <div className='edit-photos'>+</div>
          </a>}
            <img
            className='img-circle'
            src={person.main_img ? `${paths.host}/${person.main_img}` : '/public/pic.png'}
            />
          </div>
          <ul className='find-list-contest company-socials'>
            <li><a href={person.twitter || '#'}>
              <img src='/public/images/Pages/pagina_azienda_pubblic/header/tv.png' />
            </a></li>
            <li><a href={person.facebook || '#'}>
              <img src='/public/images/Pages/pagina_azienda_pubblic/header/fb.png' />
            </a></li>
            <li><a href={person.google || '#'}>
              <img src='/public/images/Pages/pagina_azienda_pubblic/header/gl.png' />
            </a></li>
            <li><a href={person.linkedin || '#'}>
              <img src='/public/images/Pages/pagina_azienda_pubblic/header/in.png' />
            </a></li>
          </ul>
        </div>
        <div className='col-lg-9 col-md-8 col-sm-8 col-xs-12'>
          <div className='row'>
            <div className='col-lg-7 col-md-9 col-sm-12 col-xs-12'>
              <h1>{person.company_name}</h1>
              <p>{person.description}</p>
              <a href={person.web_site} className='company-site'>{person.web_site}</a>
            </div>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <ul className='find-list-contest category-list'>
                {specList}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
