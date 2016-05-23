import React from 'react';
import user from './../../constants/initialUserData';

export default function HeaderContentUser({ onFile, personal, isEdit }) {
  const person = personal.length ? personal[0] : user.personal[0];

  return (

    <div className='container header-container'>
      <div className='row participants-info'>
        <div className='col-lg-2 col-sm-3 col-md-2 col-xs-12'>
          <div className='img-wrap participant-img'>
            {isEdit && <a href='#'>
              <input
                id='custom-file-input-pic' onChange={onFile}
                type='file' name='main_img'
              />
              <div className='edit-photos'>+</div>
            </a>}
            <img className='img-circle' src={person.main_img ? `http://kbim.com.ua${person.main_img}` : '/public/pic.png'} />
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

  );
}
