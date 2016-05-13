import React, { Component } from 'react';
import './../SCSS/main.scss';
import Header from './../components/Header';
import StaticContent from './../components/StaticContent';
import Footer from './../components/Footer';
import ModalLogin from './../components/ModalLogin';
import ModalRegistration from './../components/ModalRegistration';

import getStaticPageList from './../api/getStaticPageList';
import getPageApi from './../events/getPageApi';

export default class StaticPage extends Component {

  constructor(props) {
    super(props);
    this.getStaticPageList = getStaticPageList.bind(this);
    this.getPageApi = getPageApi.bind(this);
    this.state = {
      category: [],
      path: window.location.pathname.replace(/(\/public)|(index\.html)/g, ''),
      staticPageList: [],
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
          <Header category={this.state.category} />
          <StaticContent staticCont={this.state.staticCont} />
        </div>
        <Footer staticPageList={this.state.staticPageList} />
        <ModalLogin />
        <ModalRegistration />
      </div>
    );
  }
}
