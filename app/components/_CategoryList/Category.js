import React from 'react';

export default function Category({ category }) {
  const bg = {
    backgroundImage:
    `linear-gradient(to top, rgba(0, 0, 0, 0.63) 0%, transparent 100%), url(${category.image})`,
  };
  return (
    <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
      <a href={`/category/${category.slug}`}>
        <div className='wrap-category' style={bg}>
          <p>{category.name}</p>
          <img src={category.icon_img} />
        </div>
      </a>
    </div>
  );
}
