import React from 'react';
import Spec from './_UserEditProfile/Spec';
import user from './../constants/initialUserData';

export default function UserEditProfile(props) {
  const person = props.profile.personal && props.profile.personal.length ?
    props.profile.personal[0] : user.personal[0];
  const spec = props.profile.specialization &&
    props.profile.specialization.length ?
    props.profile.specialization[0] : user.specialization[0];
  const notif = props.profile.notification && props.profile.notification.length ?
    props.profile.notification[0] : user.notification[0];
  const specList = props.allCategory.length ? props.allCategory.map((obj, key) => (
    <Spec key={key} category={obj} userSpec={spec} handleUserSubmit={props.handleUserSubmit} />)
    ) : '';
  return (

    <div className='container edit-profile-wrap'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 edit-profile-header'>
          <ul className='nav nav-tabs edit-profile-list' role='tablist'>
            <li className='active edit-profile-item'>
              <a href='#personal-information' aria-controls='home' role='tab' data-toggle='tab'>
              Informazioni Personali</a></li>
            <li className='edit-profile-item'>
              <a href='#specialization' aria-controls='profile' role='tab' data-toggle='tab'>
              Specializzazioni</a></li>
            <li className='edit-profile-item'>
              <a href='#password-security' aria-controls='profile' role='tab' data-toggle='tab'>
              Password &amp; Security</a></li>
            <li className='edit-profile-item'>
              <a href='#notification' aria-controls='profile' role='tab' data-toggle='tab'>
              Notification</a></li>
          </ul>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <div className='tab-content edit-profile-content'>
            <div
            role='tabpanel' className='tab-pane edit-profile-content-body active'
            id='personal-information'
            >
              <form onSubmit={props.handleUserSubmit} name='email'>
                <div className='form-group edit-profile-form-group row'>
                  <div className='col-lg-3 col-md-4 col-sm-3 col-xs-12'>
                    <label className='control-label edit-profile-label' htmlFor='user-email'>
                      <img src='/public/images/Pages/pagina_partecipante_login/icon-email.png' />
                      INDIRIZZO EMAIL
                    </label>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-7 col-xs-12'>
                    <input
                      className='edit-profile-input' type='email'
                      id='user-email' placeholder={`${person.email || 'email'}`}
                    />
                  </div>
                  <div className='col-lg-2 col-md-1 col-sm-2 col-xs-12'>
                    <button className='btn edit-profile-btn' type='submit'>modifica</button>
                  </div>
                </div>
              </form>
              <form onSubmit={props.handleUserSubmit} name='name'>
                <div className='form-group edit-profile-form-group row'>
                  <div className='col-lg-3 col-md-4 col-sm-3 col-xs-12'>
                    <label className='control-label edit-profile-label' htmlFor='user-name'>
                      <img src='/public/images/Pages/pagina_partecipante_login/icon-man.png' />
                      NOME
                    </label>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-7 col-xs-12'>
                    <input
                      className='edit-profile-input' type='text'
                      id='user-name' placeholder={`${person.name || 'Nome'}`}
                    />
                  </div>
                  <div className='col-lg-2 col-md-1 col-sm-2 col-xs-12'>
                    <button className='btn edit-profile-btn' type='submit'>modifica</button>
                  </div>
                </div>
              </form>
              <form onSubmit={props.handleUserSubmit} name='second_name'>
                <div className='form-group edit-profile-form-group row'>
                  <div className='col-lg-3 col-md-4 col-sm-3 col-xs-12'>
                    <label className='control-label edit-profile-label' htmlFor='user-surname'>
                      <img src='/public/images/Pages/pagina_partecipante_login/icon-man.png' />
                      COGNOME
                    </label>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-7 col-xs-12'>
                    <input
                      className='edit-profile-input' type='text' id='user-surname'
                      placeholder={`${person.second_name || 'Cognome'}`}
                    />
                  </div>
                  <div className='col-lg-2 col-md-1 col-sm-2 col-xs-12'>
                    <button className='btn edit-profile-btn' type='submit'>modifica</button>
                  </div>
                </div>
              </form>
              <form onSubmit={props.handleUserSubmit} name='city'>
                <div className='form-group edit-profile-form-group row'>
                  <div className='col-lg-3 col-md-4 col-sm-3 col-xs-12'>
                    <label className='control-label edit-profile-label' htmlFor='user-city'>
                      <img src='/public/images/Pages/pagina_partecipante_login/icon-lacate.png' />
                      CITTA’
                    </label>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-7 col-xs-12'>
                    <input
                      className='edit-profile-input' type='text' id='user-city'
                      placeholder={`${person.city || 'Citta’'}`}
                    />
                  </div>
                  <div className='col-lg-2 col-md-1 col-sm-2 col-xs-12'>
                    <button className='btn edit-profile-btn' type='submit'>modifica</button>
                  </div>
                </div>
              </form>
              <form onSubmit={props.handleUserSubmit} name='tel'>
                <div className='form-group edit-profile-form-group row'>
                  <div className='col-lg-3 col-md-4 col-sm-3 col-xs-12'>
                    <label className='control-label edit-profile-label' htmlFor='user-mobile'>
                      <img src='/public/images/Pages/pagina_partecipante_login/icon-mobile.png' />
                      MOBILE
                    </label>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-7 col-xs-12'>
                    <input
                    className='edit-profile-input' type='text'
                    id='user-mobile' placeholder={`${person.tel || 'Mobile'}`}
                    />
                  </div>
                  <div className='col-lg-2 col-md-1 col-sm-2 col-xs-12'>
                    <button className='btn edit-profile-btn' type='submit'>modifica</button>
                  </div>
                </div>
              </form>
              <form onSubmit={props.handleUserSubmit} name='description'>
                <div className='form-group edit-profile-form-group row'>
                  <div className='col-lg-3 col-md-4 col-sm-3 col-xs-12'>
                    <label className='control-label edit-profile-label' htmlFor='user-description'>
                      <img src='/public/images/Pages/pagina_partecipante_login/icon-descr.png' />
                      DESCRIZIONE
                    </label>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-7 col-xs-12'>
                    <textarea
                    className='edit-profile-input' id='user-description'
                     placeholder={`${person.description || 'Description'}`} defaultValue={''}
                    />
                  </div>
                  <div className='col-lg-2 col-md-1 col-sm-2 col-xs-12'>
                    <button className='btn edit-profile-btn' type='submit'>modifica</button>
                  </div>
                </div>
              </form>
            </div>
            <div role='tabpanel' className='tab-pane edit-profile-content-body' id='specialization'>
              {specList}
            </div>
            <div role='tabpanel' className='tab-pane edit-profile-content-body' id='password-security'>
              <form>
                <div className='form-group edit-profile-form-group row'>
                  <div className='col-lg-3 col-md-4 col-sm-3 col-xs-12'>
                    <label className='control-label edit-profile-label' htmlFor='old-password'>
                      <img src='/public/images/Pages/pagina_partecipante_login/icon-hand.png' />OLD
                      PASSWORD
                    </label>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-7 col-xs-12'>
                    <input
                    className='edit-profile-input' type='password'
                    id='old-password' placeholder='*******'
                    />
                  </div>
                </div>
                <div className='form-group edit-profile-form-group row'>
                  <div className='col-lg-3 col-md-4 col-sm-3 col-xs-12'>
                    <label className='control-label edit-profile-label' htmlFor='new-password'>
                      <img src='/public/images/Pages/pagina_partecipante_login/icon-hand.png' />NEW
                      PASSWORD
                    </label>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-7 col-xs-12'>
                    <input
                    className='edit-profile-input' type='password'
                    id='new-password' placeholder='*******'
                    />
                  </div>
                </div>
                <div className='form-group edit-profile-form-group row'>
                  <div className='col-lg-3 col-md-4 col-sm-3 col-xs-12'>
                    <label className='control-label edit-profile-label' htmlFor='repeat-new-password'>
                      <img src='/public/images/Pages/pagina_partecipante_login/icon-hand.png' />CONFIRM
                      NEW PASS
                    </label>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-7 col-xs-12'>
                    <input
                    className='edit-profile-input' type='password'
                    id='repeat-new-password' placeholder='*******'
                    />
                  </div>
                  <div className='col-lg-2 col-md-1 col-sm-2 col-xs-12'>
                    <button className='btn edit-profile-btn active-btn' type='submit'>SALVA</button>
                  </div>
                </div>
              </form>
              <p>The password need to be minimum 8 character and with number and alphabets</p>
            </div>
            <div role='tabpanel' className='tab-pane edit-profile-content-body' id='notification'>
              <form>
                <div className='form-group edit-profile-form-group row'>
                  <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
                    <label className='control-label edit-profile-label' htmlFor='notifications-industrial'>
                      <img src='/public/images/Pages/pagina_partecipante_login/icon-small-industrial.png' />
                      INDUSTRIAL DESIGN
                    </label>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-6 col-xs-12'>
                    <input
                    className='edit-profile-input' type='text'
                    id='notifications-industrial' disabled
                    defaultValue='Ricevi notifiche per nuovi contest'
                    />
                  </div>
                  <div className='col-lg-2 col-md-1 col-sm-2 col-xs-12'>
                    <button className='btn edit-profile-btn' type='submit'>disattiva</button>
                  </div>
                </div>
              </form>
              <form>
                <div className='form-group edit-profile-form-group row'>
                  <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
                    <label className='control-label edit-profile-label' htmlFor='notifications-transport'>
                      <img src='/public/images/Pages/pagina_partecipante_login/icon-small-transport.png' />
                      TRANSPORT DESIGN
                    </label>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-6 col-xs-12'>
                    <input
                    className='edit-profile-input' type='text'
                    id='notifications-transport' disabled defaultValue='Non Ricevi notifiche per nuovi contest'
                    />
                  </div>
                  <div className='col-lg-2 col-md-1 col-sm-2 col-xs-12'>
                    <button className='btn edit-profile-btn active-btn' type='submit'>
                      attiva
                    </button>
                  </div>
                </div>
              </form>
              <form>
                <div className='form-group edit-profile-form-group row'>
                  <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
                    <label className='control-label edit-profile-label' htmlFor='notifications-jewellery'>
                      <img src='/public/images/Pages/pagina_partecipante_login/icon-small-jewellery.png' />
                      JEWELLERY DESIGN
                    </label>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-6 col-xs-12'>
                    <input
                    className='edit-profile-input' type='text'
                    id='notifications-jewellery' disabled
                    defaultValue='Non Ricevi notifiche per nuovi contest'
                    />
                  </div>
                  <div className='col-lg-2 col-md-1 col-sm-2 col-xs-12'>
                    <button className='btn edit-profile-btn active-btn' type='submit'>attiva</button>
                  </div>
                </div>
              </form>
              <form>
                <div className='form-group edit-profile-form-group row'>
                  <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
                    <label className='control-label edit-profile-label' htmlFor='notifications-light'>
                      <img src='/public/images/Pages/pagina_partecipante_login/icon-small-light.png' />
                      LIGHT DESIGN
                    </label>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-6 col-xs-12'>
                    <input
                    className='edit-profile-input' type='text'
                    id='notifications-light' disabled
                    defaultValue='Ricevi notifiche per nuovi contest'
                    />
                  </div>
                  <div className='col-lg-2 col-md-1 col-sm-2 col-xs-12'>
                    <button className='btn edit-profile-btn' type='submit'>disattiva</button>
                  </div>
                </div>
              </form>
              <form>
                <div className='form-group edit-profile-form-group row'>
                  <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
                    <label className='control-label edit-profile-label' htmlFor='notifications-esterni'>
                      <img src='/public/images/Pages/pagina_partecipante_login/icon-small-esterni.png' />
                      DESIGN DI ESTERNI
                    </label>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-6 col-xs-12'>
                    <input
                    className='edit-profile-input' type='text'
                    id='notifications-esterni' disabled defaultValue='Ricevi notifiche per nuovi contest'
                    />
                  </div>
                  <div className='col-lg-2 col-md-1 col-sm-2 col-xs-12'>
                    <button className='btn edit-profile-btn' type='submit'>disattiva</button>
                  </div>
                </div>
              </form>
              <form>
                <div className='form-group edit-profile-form-group row'>
                  <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
                    <label className='control-label edit-profile-label' htmlFor='notifications-interni'>
                      <img src='/public/images/Pages/pagina_partecipante_login/icon-small-interni.png' />
                      DESIGN DI INTERNI
                    </label>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-6 col-xs-12'>
                    <input
                    className='edit-profile-input' type='text'
                    id='notifications-interni' disabled
                    defaultValue='Ricevi notifiche per nuovi contest'
                    />
                  </div>
                  <div className='col-lg-2 col-md-1 col-sm-2 col-xs-12'>
                    <button className='btn edit-profile-btn' type='submit'>disattiva</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
