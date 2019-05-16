import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginForm from "./loginForm";
import AdminLogin from "./adminLogin";
import Regisiter from "./register";
import { LoginWrapper, LoginBox } from "./style";
import { Tabs } from "antd";
import logo from '../../static/images/logo.png';
import "./style.scss";
import { querystringParse } from '../../utils';
const TabPane = Tabs.TabPane;

class Login extends PureComponent {
  render() {
    const { login } = this.props;
    const query = querystringParse(window.location.search);
    if (!login) {
      return (
        <LoginWrapper className="login-wrapper">
          <div className="title-wrapper">
            <img src={logo} alt="logo"/>
          </div>
          <LoginBox>
            <Tabs>
              <TabPane tab="登陆" key="登陆">
                {query.type === "admin" ? <AdminLogin /> : <LoginForm />}
              </TabPane>
              <TabPane tab="注册" key="注册" disabled={query.type === "admin"}>
                <Regisiter />
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
