import React from 'react';

export default function StaticContent({ staticCont }) {
  console.log(staticCont.Title);
  return (

    <div id='content'>
      <div className='container'>
        <div className='row' id='static-wrap'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 header-category'>
            <span className='line' />
            <h1>{staticCont.Title}</h1>
            <div dangerouslySetInnerHTML={{ __html: staticCont.Content }} />
          </div>
        </div>
      </div>
    </div>
  );
}
