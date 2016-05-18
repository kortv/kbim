import React from 'react';
import user from './../constants/initialUserData';

export default function UserHeader({ category, staticOne, isLogedIn, onFile, personal, isEdit }) {
  const person = personal.length ? personal[0] : user.personal[0];
  const list = category.length ? category.map((obj) => (
    <li key={obj.id}><a href={`/category/${obj.slug}`}>{obj.name}</a></li>
    )) :
    <div />;
  return (

    <header>
      <div className='container header-container'>
        <div className='row'>
          <div className='col-lg-5  col-md-5 col-sm-5 col-xs-12' id='logo-wrap'>
            <div id='logo'>
              <a href='#'>
                <img src='/public/images/Pages/homepage/header/logo_designando.png' />
              </a>
            </div>
            <button
              type='button' className='navbar-toggle' data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
              <i className='glyphicon glyphicon-menu-hamburger' />
            </button>
          </div>
          <div className='col-lg-7  col-md-7  col-sm-7 col-xs-12'>
            <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
              <ul className='nav navbar-nav'>
                <li className='dropdown'>
                  <a className='dropdown-toggle' data-toggle='dropdown' aria-expanded='false'>
                    categorie<i className='fa fa-chevron-down' aria-hidden='true' /></a>
                  <ul className='dropdown-menu dropdown-menu-right'>
                    {list}
                  </ul>
                </li>
                <li><a href={`/page/${staticOne.Alias}`}>{staticOne.Title}</a></li>

                {!isLogedIn && <li><a href='#loginModal' data-toggle='modal'>login</a></li>}
                {!isLogedIn && <li><a href='#'>iscriviti</a></li>}

                {isLogedIn && <li className='item-for-registered-user'>
                  <a href='#' className='dropdown-toggle' data-toggle='dropdown'>
                    <img className='img-circle' src={`http://kbim.com.ua${person.main_img}` || '/public/pic.png'} />
                    Hi {person.name}<i className='fa fa-chevron-down' aria-hidden='true' /></a>
                  <ul className='dropdown-menu dropdown-menu-right'>
                    <li><a href='#'>PORTOFOLIO</a></li>
                    <li role='separator' className='divider' />
                    <li><a href='#'>PROFILO</a></li>
                    <li role='separator' className='divider' />
                    <li><a href='#'>Logout</a></li>
                  </ul>
                </li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container header-container'>
        <div className='row participants-info'>
          <div className='col-lg-2 col-sm-3 col-md-2 col-xs-12'>
            <div className='img-wrap participant-img'>
              {isEdit && <a href='#'>
                <input id='custom-file-input-pic' onChange={onFile} type='file' />
                <div className='edit-photos'>+</div>
              </a>}
              <img className='img-circle' src={`http://kbim.com.ua${person.main_img}` || '/public/pic.png'} />
            </div>
          </div>
          <div className='col-lg-7 col-sm-9 col-md-9 col-xs-12'>
            <p className='participant-name' style={{ textTransform: 'none' }}>
              {person.name} {person.second_name}</p>
            <p className='participant-text'>
              {person.description}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
