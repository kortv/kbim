import React from 'react';

export default function HeaderContentMain({ isLogedIn }) {
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
  return (
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
  );
}
