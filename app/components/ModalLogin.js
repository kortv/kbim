import React from 'react';

export default function ModalLogin({ handleRegistrationLogin }) {
  return (

    <div className='modal fade' id='loginModal' tabIndex={-1} role='dialog'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4 className='modal-title'>Effettual il login</h4>
          </div>
          <div className='modal-body'>
            <button className='btn btn-default btn-block lg-facebook'>
              <i className='fa fa-facebook' aria-hidden='true' />login with facebook</button>
            <button className='btn btn-default btn-block lg-linkedin'>
              <i className='fa fa-linkedin-square' aria-hidden='true' />login with linkedin</button>
            <p>oppure</p>
            <form role='form' onSubmit={handleRegistrationLogin}>
              <div className='form-group'>
                <input
                  type='email' className='form-control' id='login-email' placeholder='email'
                  name='email'
                />
              </div>
              <div className='form-group'>
                <input
                type='password' className='form-control' id='login-password' placeholder='password'
                name='password'
                />
              </div>
              <button
              type='submit' className='btn btn-default btn-success btn-block'
              >iscriviti</button>
            </form>
          </div>
          <div className='modal-footer'>
            <a href='#'>password dimenticata?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
