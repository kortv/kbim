import React, { Component } from 'react';
import './../SCSS/main.scss';
import Header from './../components/Header';
import CategoryList from './../components/CategoryList';
import Block from './../components/Block';
import Company from './../components/Company';
import Footer from './../components/Footer';
import ModalLogin from './../components/ModalLogin';
import ModalRegistration from './../components/ModalRegistration';

import getStaticPageList from './../api/getStaticPageList';
import getPageApi from './../events/getPageApi';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.getStaticPageList = getStaticPageList.bind(this);
    this.getPageApi = getPageApi.bind(this);
    this.state = {
      category: [],
      path: window.location.pathname.replace(/(\/public)|(index\.html)/g, ''),
      staticPageList: [],
      staticOne: {},
      staticCont: {},
    };
  }

  componentDidMount() {
    console.log(this.state.path);
    this.getPageApi(this.state.path);
    this.getStaticPageList();
  }

  render() {
    return (
      <div>
        <div id='content'>
          <Header
            category={this.state.category} staticOne={this.state.staticOne}
          />
          <CategoryList category={this.state.category} />
          <Block />
          <Company />
        </div>
        <Footer staticPageList={this.state.staticPageList} />
        <ModalLogin />
        <ModalRegistration />
      </div>
    );
  }
}
