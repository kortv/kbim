import React, { Component } from 'react';
import './../SCSS/main.scss';
import Header from './../components/Header';
import StaticContent from './../components/StaticContent';
import Footer from './../components/Footer';
import ModalLogin from './../components/ModalLogin';
import ModalRegistration from './../components/ModalRegistration';
import ModalSuccess from './../components/ModalSuccess';

import postRegistrationLogin from './../api/postRegistrationLogin';
import getStaticPageList from './../api/getStaticPageList';
import getPageApi from './../events/getPageApi';
import handleRegistrationLogin from './../events/handleRegistrationLogin';
import handlePickCategory from './../events/handlePickCategory';

export default class StaticPage extends Component {

  constructor(props) {
    super(props);
    this.postRegistrationLogin = postRegistrationLogin.bind(this);
    this.getStaticPageList = getStaticPageList.bind(this);
    this.getPageApi = getPageApi.bind(this);
    this.handleRegistrationLogin = handleRegistrationLogin.bind(this);
    this.handlePickCategory = handlePickCategory.bind(this);
    this.state = {
      category: [],
      path: window.location.pathname.replace(/(\/public)|(index\.html)/g, ''),
      staticPageList: [],
      staticOne: {},
      staticCont: {},
      isLogedIn: !!localStorage.getItem('accessToken'),
      mainName: '',
      mainMsg: '',
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
            isLogedIn={this.state.isLogedIn}
            category={this.state.category} staticOne={this.state.staticOne}
          />
          <StaticContent staticCont={this.state.staticCont} />
        </div>
        <Footer staticPageList={this.state.staticPageList} />
        <ModalLogin handleRegistrationLogin={this.handleRegistrationLogin} />
        <ModalRegistration handleRegistrationLogin={this.handleRegistrationLogin} />
        <ModalSuccess
          handlePickCategory={this.handlePickCategory} category={this.state.category}
          mainName={this.state.mainName} mainMsg={this.state.mainMsg}
        />
      </div>
    );
  }
}
