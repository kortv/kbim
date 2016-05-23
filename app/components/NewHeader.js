import React from 'react';
import user from './../constants/initialUserData';

export default function NewHeader(props) {
  const person = props.personal.length ? props.personal[0] : user.personal[0];
  const list = props.category.length ? props.category.map((obj) => (
    <li key={obj.id}><a href={`/category/${obj.slug}`}>{obj.name}</a></li>
    )) : <div />;

  return (

    <header>
      <div className='container header-container'>
        <div className='row'>
          <div className='col-lg-4  col-md-4 col-sm-4 col-xs-12' id='logo-wrap'>
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
          <div className='col-lg-8  col-md-8  col-sm-8 col-xs-12'>
            <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
              <ul className='nav navbar-nav'>
                <li className='dropdown'>
                  <a className='dropdown-toggle' data-toggle='dropdown' aria-expanded='false'>
                    categorie<i className='fa fa-chevron-down' aria-hidden='true' /></a>
                  <ul className='dropdown-menu dropdown-menu-right'>
                    {list}
                  </ul>
                </li>
                <li><a href={`/page/${props.staticOne.Alias}`}>{props.staticOne.Title}</a></li>
                {person.company_name && <li><a href='#loginModal' data-toggle='modal'>crea</a></li>}
                {!props.isLogedIn && <li><a href='#loginModal' data-toggle='modal'>login</a></li>}
                {!props.isLogedIn && <li><a href='#'>iscriviti</a></li>}

                {props.isLogedIn && <li className='item-for-registered-user'>
                  <a href='#' className='dropdown-toggle' data-toggle='dropdown'>
                    <img className='img-circle' src={person.main_img ? `http://kbim.com.ua${person.main_img}` : '/public/pic.png'} />
                    Hi {person.company_name || person.name}
                    <i className='fa fa-chevron-down' aria-hidden='true' />
                  </a>
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
      {props.personal && props.children}
    </header>
  );
}
