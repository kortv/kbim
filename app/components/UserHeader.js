import React from 'react';

export default function UserHeader({ category, staticOne, isLogedIn }) {
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
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
              <i className='glyphicon glyphicon-menu-hamburger' />
            </button>
          </div>
          <div className='col-lg-7  col-md-7  col-sm-7 col-xs-12'>
            <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
              <ul className='nav navbar-nav'>
                <li className='dropdown'>
                  <a href='#' className='dropdown-toggle' data-toggle='dropdown' aria-expanded='false'>categorie<i className='fa fa-chevron-down' aria-hidden='true' /></a>
                  <ul className='dropdown-menu dropdown-menu-right'>
                    <li><a href='#'>industrial design</a></li>
                    <li><a href='#'>transportation design</a></li>
                    <li><a href='#'>design di interni</a></li>
                    <li><a href='#'>gioielli design</a></li>
                    <li><a href='#'>design di esterni</a></li>
                    <li><a href='#'>light design</a></li>
                  </ul>
                </li>
                <li><a href='#'>come funziona</a></li>
                <li className='item-for-registered-user'>
                  <a href='#' className='dropdown-toggle' data-toggle='dropdown'>
                    <img className='img-circle' src='/public/images/Pages/pagina_partecipante/oval-314.png' />Hi Isabelle<i className='fa fa-chevron-down' aria-hidden='true' /></a>
                  <ul className='dropdown-menu dropdown-menu-right'>
                    <li><a href='#'>PORTOFOLIO</a></li>
                    <li role='separator' className='divider' />
                    <li><a href='#'>PROFILO</a></li>
                    <li role='separator' className='divider' />
                    <li><a href='#'>Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container header-container'>
        <div className='row participants-info'>
          <div className='col-lg-2 col-sm-3 col-md-2 col-xs-12'>
            <div className='img-wrap participant-img'>
              <a href='#'><div className='edit-photos'>+</div></a>
              <img className='img-circle' src='/public/images/Pages/pagina_partecipante/oval-314.png' />
            </div>
          </div>
          <div className='col-lg-7 col-sm-9 col-md-9 col-xs-12'>
            <p className='participant-name' style={{textTransform: 'none'}}>Isabelle H</p>
            <p className='participant-text'>Night Of seas fruitful image that man of beast heaven green own it after and shall. Likeness shall which creepeth to heaven living open fruit bring created</p>
          </div>
        </div>
      </div>
    </header>
  );
}
