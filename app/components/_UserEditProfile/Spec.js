import React from 'react';

export default function Spec({ userSpec, category, handleUserSubmit }) {
  const isCategory = !!userSpec[category.slug];
  const btn = isCategory ? (
    <button className='btn edit-profile-btn active-btn' type='submit'>attiva</button>
  ) : (
    <button className='btn edit-profile-btn' type='submit'>disattiva</button>
  );
  const value = isCategory ? 'attivo' : 'disattivo';
  console.log(value);
  return (
    <form onSubmit={handleUserSubmit} name='specialization'>
      <div className='form-group edit-profile-form-group row'>
        <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
          <label
            className='control-label edit-profile-label'
            style={{ fontSize: '14px' }}
          >
            <img
            style={{ maxWidth: '31px', maxHeight: '31px' }}
            src={category.icon_img}
            />
          {category.name}
          </label>
        </div>
        <div className='col-lg-7 col-md-7 col-sm-6 col-xs-12'>
          <input
          className='edit-profile-input' type='text' data-slug={category.slug}
          disabled value={value} data-value={!isCategory}
          />
        </div>
        <div className='col-lg-2 col-md-1 col-sm-2 col-xs-12'>
          {btn}
        </div>
      </div>
    </form>
  );
}
