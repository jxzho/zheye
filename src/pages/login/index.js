import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginForm from "./loginForm";
import { LoginWrapper, LoginBox } from "./style";
import { Tabs } from "antd";
import logo from '../../static/images/ant_design_logo.svg';
import "./style.scss";
const TabPane = Tabs.TabPane;

class Login extends PureComponent {
  render() {
    const { login } = this.props;
    if (!login) {
      return (
        <LoginWrapper className="login-wrapper">
          <div className="title-wrapper">
            <img src={logo} alt="logo"/>
            <span className="title-text">者也</span>
          </div>
          <LoginBox>
            <Tabs>
              <TabPane tab="登陆" key="登陆">
                <LoginForm />
              </TabPane>
              <TabPane tab="注册" key="注册">
                注册
              </TabPane>
            </Tabs>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapState = state => ({
  login: state.getIn(["login", "login"])
});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Login);
