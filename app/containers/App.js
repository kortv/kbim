import React, { Component } from 'react';
import './../SCSS/main.scss';

import StaticContent from './../components/StaticContent';

import NewHeader from './../components/NewHeader';
import CategoryList from './../components/CategoryList';
import HeaderContentMain from './../components/_UserHeader/HeaderContentMain';
import Block from './../components/Block';
import Company from './../components/Company';
import Footer from './../components/Footer';
import ModalLogin from './../components/ModalLogin';
import ModalRegistration from './../components/ModalRegistration';
import ModalSuccess from './../components/ModalSuccess';

import getCategory from './../api/getCategory';
import postRegistrationLogin from './../api/postRegistrationLogin';
import getStaticPageList from './../api/getStaticPageList';
import getFullUserData from './../api/getFullUserData';

import getPageApi from './../events/getPageApi';
import handleRegistrationLogin from './../events/handleRegistrationLogin';
import handlePickCategory from './../events/handlePickCategory';

import paths from './../constants/paths';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.getFullUserData = getFullUserData.bind(this);
    this.getCategory = getCategory.bind(this);
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
      mainImg: '',
    };
  }

  componentDidMount() {
    // console.log(this.state.path);
    this.getPageApi(this.state.path);
    this.getStaticPageList();
    this.getCategory(paths.category);
    // setTimeout(() => { this.postRegistrationLogin(); }, 3000);
  }

  render() {
    return (
      <div>
        <div id='content'>
          <NewHeader
            isLogedIn={this.state.isLogedIn} personal={this.state.person || 'a'}
            category={this.state.category} staticOne={this.state.staticOne}
          >
            <HeaderContentMain isLogedIn={this.state.isLogedIn} />
          </NewHeader>
          {this.props.static &&
            <StaticContent staticCont={this.state.staticCont} />}

          {this.props.main &&
            <CategoryList category={this.state.category} />}
          {this.props.main && <Block />}
          {this.props.main && <Company />}
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
