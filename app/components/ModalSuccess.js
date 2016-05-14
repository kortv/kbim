import React from 'react';

export default function ModalSuccess({ category, handlePickCategory, mainName, mainMsg }) {
  const categoryList = category && category.length ?
  category.map((obj) => (
    <div key={obj.id} className='col-md-4 col-sm-4 col-xs-6'>
      <input type='checkbox' name={obj.id} className='checkbox' id={obj.slug} />
      <label htmlFor={obj.slug}>
        <i className='fa fa-check' aria-hidden='true' />
        <span className='category-icon circle-icon'>
          <img src={obj.icon_img} />
        </span>
        <span>{obj.name}</span>
      </label>
    </div>
  )) : '';
  return (

    <div className='modal fade regSuccessModal' id='companyModal' tabIndex={-1} role='dialog'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <form onSubmit={handlePickCategory} id='formCompanyModal'>
            <div className='modal-header'>
              <h4 className='modal-title'>Thanks for registration <span>{mainName}</span></h4>
              <p>{mainMsg}
              </p>
              {/* <div className='form-group'>
                <input
                  type='text' className='form-control' id='company-name'
                  placeholder='scrivi qui il nome della tua azienda'
                />
              </div>
              <p>e le categorie di interesse</p>*/}
            </div>
            <div className='modal-body'>
              <div className='row'>
                {categoryList}
              </div>
              <button type='submit' className='btn btn-default'>
                salva <span>e</span> carica il tuo contest
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
