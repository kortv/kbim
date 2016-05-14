import React from 'react';
import CategoryMenu from './_CategoryList/CategoryMenu';

export default function Header({ category, staticOne, isLogedIn }) {
  const loginBtn = !isLogedIn ? (<li><a href='#loginModal' data-toggle='modal'>login</a></li>) : '';
  const registrationBtn = !isLogedIn ? (
    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
      <div className='reg-btn-row'>
        <a
        href='#registrationModal' data-toggle='modal'
        className='btn btn-default' id='registration-btn'
        >
          REGISTRATI a
          <span>DESIGNANDO</span></a>
        <p>è gratis e ci vogliono 10secondi</p>
      </div>
    </div>
) : '';
  const list = category.length ? category.map((obj) => (
    <CategoryMenu category={obj} key={obj.id} />)) :
    <div />;
  return (

    <header>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-5  col-md-5 col-sm-5 col-xs-12' id='logo-wrap'>
            <div id='logo'>
              <a href='#'>
                <img src='/public/images/Pages/homepage/header/logo_designando.png' />
              </a>
            </div>
            <button
              type='button' className='navbar-toggle'
              data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'
            >
              <i className='glyphicon glyphicon-menu-hamburger' />
            </button>
          </div>
          <div className='col-lg-5  col-md-6  col-sm-7 col-xs-12'>
            <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
              <ul className='nav navbar-nav'>
                <li className='dropdown'>
                  <a href='#' className='dropdown-toggle' data-toggle='dropdown'>
                    categorie<b className='caret' />
                  </a>
                  <ul className='dropdown-menu'>
                    {list}
                  </ul>
                </li>
                <li><a href={`/page/${staticOne.Alias}`}>{staticOne.Title}</a></li>
                {loginBtn}
                <li><a href='#'>iscriviti</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row' id='header-body'>
          <div className='col-lg-2 col-md-2 col-sm-3 hidden-xs'>
            <div className='img-wrap' id='img-pen-box'>
              <img src='/public/images/Pages/homepage/header/pen-box.png' />
            </div>
          </div>
          <div className='col-lg-8 col-md-8 col-sm-7 col-xs-12'>
            <div className='row header-center'>
              <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
                <p className='big-header-text'>
                  La prima piattaforma di w2w: trova lavoro con il lavoro
                </p>
              </div>
              {registrationBtn}
            </div>
            <div className='row'>
              <div className='col-lg-4 col-md-4 col-md-offset-2 col-sm-5'>
                <div className='run'>
                  <a href='#'>
                    <span className='glyphicon glyphicon-play-circle' />
                    <p>clicca per vedere come funziona</p>
                  </a>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' id='pl-wrap'>
                <div id='planctonic'>
                  <div className='img-wrap'>
                    <img src='/public/images/Pages/homepage/header/planctonic.png' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-2 col-sm-2 hidden-xs'>
            <div className='img-wrap ' id='right-img'>
              <img src='/public/images/Pages/homepage/header/pen.png' />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
