import React from 'react';

export default function Block() {
  return (

    <div className='container-fluid' id='two-content-wrap'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-3 col-sm-3 hidden-xs'>
            <div className='img-wrap ' id='left-img'>
              <img src='images/Pages/homepage/content/tree.png' />
            </div>
          </div>
          <div className='col-lg-6 col-md-6  col-sm-6 col-xs-12' id='block-designer'>
            <img className='img-circle' src='images/Pages/homepage/content/starck.png' />
            <p>
            'Just a pure dreamer. It is a very strange life, like a sort of luxurious modern monk.'
            </p>
            <p>Philippe Starck</p>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-3 hidden-xs'>
            <div className='img-wrap ' id='img-right'>
              <img src='images/Pages/homepage/content/pencils.png' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
