import React, { Component } from 'react';
import './../SCSS/main.scss';


import UserHeader from './../components/UserHeader';
import UserEditProfile from './../components/UserEditProfile';
import UserShowProfile from './../components/UserShowProfile';
import Footer from './../components/Footer';
import ModalLogin from './../components/ModalLogin';
import ModalRegistration from './../components/ModalRegistration';
import ModalSuccess from './../components/ModalSuccess';

import getFullUserData from './../api/getFullUserData';
import getUserData from './../api/getUserData';
import getCategory from './../api/getCategory';
import postRegistrationLogin from './../api/postRegistrationLogin';
import getStaticPageList from './../api/getStaticPageList';

import handleUserSubmit from './../events/handleUserSubmit';
import handleRegistrationLogin from './../events/handleRegistrationLogin';
import handlePickCategory from './../events/handlePickCategory';
import onFile from './../events/onFile';

import paths from './../constants/paths';

export default class UserPage extends Component {

  constructor(props) {
    super(props);
    this.getFullUserData = getFullUserData.bind(this);
    this.getUserData = getUserData.bind(this);
    this.onFile = onFile.bind(this);
    this.getCategory = getCategory.bind(this);
    this.postRegistrationLogin = postRegistrationLogin.bind(this);
    this.getStaticPageList = getStaticPageList.bind(this);
    this.handleRegistrationLogin = handleRegistrationLogin.bind(this);
    this.handleUserSubmit = handleUserSubmit.bind(this);
    this.handlePickCategory = handlePickCategory.bind(this);
    this.state = {
      category: [],
      staticPageList: [],
      staticOne: {},
      isLogedIn: !!localStorage.getItem('accessToken'),
      mainName: '',
      mainMsg: '',
      userData: {},
    };
  }

  componentDidMount() {
    if (this.props.show) {
      this.getUserData(paths.userData);
    } else if (this.props.edit) {
      this.getFullUserData(paths.user);
    }
    this.getStaticPageList();
    this.getCategory(paths.category);
  }

  render() {
    return (
      <div>
        <div id='content'>
          <UserHeader
            personal={this.state.userData.personal || ''} isEdit={this.props.edit}
            isLogedIn={this.state.isLogedIn} onFile={this.onFile}
            category={this.state.category} staticOne={this.state.staticOne}
          />
        {this.props.edit && <UserEditProfile
          profile={this.state.userData} handleUserSubmit={this.handleUserSubmit}
          allCategory={this.state.category}
        />}
        {this.props.show && <UserShowProfile />}
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
