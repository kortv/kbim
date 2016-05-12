import React from 'react';

export default function CategoryMenu({ category }) {
  return (
    <li><a href={`/category/${category.slug}`}>{category.name}</a></li>
  );
}
