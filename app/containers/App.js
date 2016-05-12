import React, { Component } from 'react';
import './../SCSS/main.scss';
import Header from './../components/Header';
import CategoryList from './../components/CategoryList';
import Block from './../components/Block';
import Company from './../components/Company';
import Footer from './../components/Footer';
import ModalLogin from './../components/ModalLogin';
import ModalRegistration from './../components/ModalRegistration';

import getCategory from './../api/getCategory';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.getCategory = getCategory.bind(this);
    this.state = {
      category: [],
    };
  }

  componentDidMount() {
    this.getCategory('/../app/JSON/category.json');
  }

  render() {
    return (
      <div>
        <div id='content'>
          <Header category={this.state.category} />
          <CategoryList category={this.state.category} />
          <Block />
          <Company />
        </div>
        <Footer />
        <ModalLogin />
        <ModalRegistration />
      </div>
    );
  }
}
