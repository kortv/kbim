import React from 'react';

export default function ModalRegistration({ handleRegistrationLogin, getFbAuth }) {
  return (

    <div className='modal fade' id='registrationModal' tabIndex={-1} role='dialog'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <ul className='nav nav-tabs' role='tablist'>
              <li className='active'>
                <a
                href='#home' className='modal-title'
                aria-controls='home' role='tab' data-toggle='tab'
                >
                Designer</a>
              </li>
              <li><a
              href='#profile' className='modal-title'
              aria-controls='profile' role='tab' data-toggle='tab'
              >Azienda</a></li>
            </ul>
          </div>
          <div className='modal-body'>
            <div className='tab-content'>
              <div role='tabpanel' className='tab-pane active' id='home'>
              <div id="uLogin" data-ulogin="display=small;fields=first_name,last_name;providers=linkedin,facebook;hidden=;redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F"></div>

                <button
                className='btn btn-default btn-block lg-facebook'
                onClick={() => {window.location.href='https://www.facebook.com/dialog/oauth?client_id=815469045253320&redirect_uri=http://localhost:8080/fblogin&response_type=code'}}
                >
                  <i className='fa fa-facebook' aria-hidden='true' />connect with facebook</button>
                <button className='btn btn-default btn-block lg-linkedin'>
                  <i className='fa fa-linkedin-square' aria-hidden='true' />connect with linkedin
                </button>
                <p>oppure</p>
                <form role='form' name='user' onSubmit={handleRegistrationLogin}>
                  <div className='row'>
                    <div className='form-group col-md-6 col-sm-6 col-xs-12'>
                      <input
                      name='first_name'
                      type='text' className='form-control' id='reg-designer-name' placeholder='nome'
                      />
                    </div>
                    <div className='form-group col-md-6 col-sm-6 col-xs-12'>
                      <input
                      name='second_name' type='text' className='form-control'
                      id='reg-designer-surname' placeholder='cognome'
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <input
                    name='email' type='email' className='form-control'
                    id='reg-designer-email' placeholder='email'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                    name='password' type='password' className='form-control'
                    id='reg-designer-password' placeholder='password'
                    />
                  </div>
                  <button type='submit' className='btn btn-default btn-success btn-block'>
                  iscriviti</button>
                </form>
              </div>
              <div role='tabpanel' className='tab-pane' id='profile'>
                <button className='btn btn-default btn-block lg-facebook'>
                  <i className='fa fa-facebook' aria-hidden='true' />connect with facebook</button>
                <button className='btn btn-default btn-block lg-linkedin'>
                  <i className='fa fa-linkedin-square' aria-hidden='true' />
                  connect with linkedin
                </button>
                <p>oppure</p>
                <form role='form' name='company' onSubmit={handleRegistrationLogin}>
                  <div className='form-group'>
                    <input
                    name='company_name' type='text' className='form-control'
                    id='reg-company-name' placeholder='nome azienda'
                    />
                  </div>
                  <div className='row'>
                    <div className='form-group col-md-6 col-sm-6 col-xs-12'>
                      <input
                      name='first_name' type='text' className='form-control'
                      id='reg-name' placeholder='nome'
                      />
                    </div>
                    <div className='form-group col-md-6 col-sm-6 col-xs-12'>
                      <input
                      name='second_name' type='text' className='form-control'
                      id='reg-surname' placeholder='cognome'
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <input
                    name='email' type='email' className='form-control'
                    id='reg-email' placeholder='email'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                    type='password' className='form-control' name='password'
                    id='reg-password' placeholder='password'
                    />
                  </div>
                  <button type='submit' className='btn btn-default btn-success btn-block'>
                  iscriviti</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
