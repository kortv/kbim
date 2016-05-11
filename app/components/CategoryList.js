import React from 'react';
import Category from './_CategoryList/Category';

export default function CategoryList({ category }) {
  const list = category.length ? category.map((obj) => <Category category={obj} key={obj.id} />) :
    <div />;
  console.log(category.length);
  return (

    <div className='container' id='first-category-wrap'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 header-category'>
          <span className='line' />
          <h2>LE CATEGORIE</h2>
          <p>
          Sfoglia le categorie, scegli il contest più
          adatto a te e inizia a lavorare per il tuo futuro
          </p>
        </div>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <div className='row'>
            {list}
          </div>
        </div>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <a className='btn btn-default'>SCOPRI TUTTI I CONTEST</a>
        </div>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <img src='images/Pages/homepage/content/brush.png' />
        </div>
      </div>
    </div>
  );
}
