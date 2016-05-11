import React from 'react';

export default function Footer() {
  return (

    <footer>
      <div className='col-lg-4 col-md-4 col-sm-3 col-xs-12'>
        <div className='logo-footer'>
          <a href='#'>
            <img src='images/Pages/homepage/header/logo_designando.png' />
          </a>
        </div>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
        <div className='footer-menu'>
          <ul className='navbar-nav'>
            <li><a href='static_page.html'>contatti</a> </li>
            <li><a href='#'>privacy policy</a> </li>
            <li><a href='#'>terms</a> </li>
            <li><a href='#'>chi siamo</a> </li>
          </ul>
        </div>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-3 col-xs-12'>
        <div className='social-icons'>
          <ul>
            <li>
              <a href='#'><img src='images/Pages/homepage/footer/icon-tv.png' /></a>
            </li>
            <li>
              <a href='#'><img src='images/Pages/homepage/footer/icon-fb.png' /></a>
            </li>
            <li>
              <a href='#'><img src='images/Pages/homepage/footer/icon-gl.png' /></a>
            </li>
            <li>
              <a href='#'><img src='images/Pages/homepage/footer/icon-in.png' /></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
