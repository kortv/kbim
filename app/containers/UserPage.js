import React, { Component } from 'react';
import './../SCSS/main.scss';


import UserHeader from './../components/UserHeader';
import UserEditProfile from './../components/UserEditProfile';
import Footer from './../components/Footer';
import ModalLogin from './../components/ModalLogin';
import ModalRegistration from './../components/ModalRegistration';
import ModalSuccess from './../components/ModalSuccess';

import getCategory from './../api/getCategory';
import postRegistrationLogin from './../api/postRegistrationLogin';
import getStaticPageList from './../api/getStaticPageList';

import handleRegistrationLogin from './../events/handleRegistrationLogin';
import handlePickCategory from './../events/handlePickCategory';

import paths from './../constants/paths';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.getCategory = getCategory.bind(this);
    this.postRegistrationLogin = postRegistrationLogin.bind(this);
    this.getStaticPageList = getStaticPageList.bind(this);
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
    this.getStaticPageList();
    this.getCategory(paths.category);
  }

  render() {
    return (
      <div>
        <div id='content'>
          <UserHeader
            isLogedIn={this.state.isLogedIn}
            category={this.state.category} staticOne={this.state.staticOne}
          />
          <UserEditProfile />
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
