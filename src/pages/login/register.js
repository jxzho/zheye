import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Input, Button, message, Tooltip, Icon } from "antd";
import { actionCreators } from "./store";
import api from '../../api';

class Register extends PureComponent {
  state = {
    account: "",
    password: "",
    isAccAllow: true,
    isPwdAllow: true
  };

  handleACTChange = e => {
    const acc = e.target.value;
    const reg = /^[a-zA-Z0-9_-]{6,10}$/; // 6-10位，字母、数字、下划线、减号

    if (acc.match(reg)) {
      this.setState({ isAccAllow: true });
    } else {
      this.setState({ isAccAllow: false });
    }

    this.setState({ account: acc });
  };

  handlePSWChange = e => {
    const pwd = e.target.value;
    const reg = /^[\w]{6,12}$/ // 6-12位，字母、数字、下划线

    if (pwd.match(reg)) {
      this.setState({ isPwdAllow: true });
    } else {
      this.setState({ isPwdAllow: false });
    }

    this.setState({ password: pwd });
  };

  handleAuthChange = e => {
    this.setState({ auth: e.target.value });
  }

  render() {
    const { account, password } = this.state;
    const isAccAndPwdNull = (account === "" && password === "");
    return (
      <div className="login-form">
        <div className="login-input-area">
          <Input
            placeholder="你的用户名"
            onChange={this.handleACTChange}
            suffix={
              <Tooltip title="6-10位，字母、数字、下划线、减号">
                <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
          />
          <Input
            placeholder="密码"
            type="password"
            onChange={this.handlePSWChange}
            suffix={
              <Tooltip title="6-12位，字母、数字、下划线">
                <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
          />
        </div>
        {this.state.isAccAllow ? null : (<div style={{ color: "red" }}>用户名：6-10位，字母、数字、下划线、减号</div>)}
        {this.state.isPwdAllow ? null : (<div style={{ color: "red" }}>密码：6-12位，字母、数字、下划线</div>)}
        <Button
          type="primary"
          shape="round"
          disabled={!(this.state.isAccAllow && this.state.isPwdAllow) || (isAccAndPwdNull)}
          onClick={() => {
            api.register(account, password).then(res => {
              const data = res.data;
              if (data.result) {
                message.success("注册成功！已自动为您登录！");
                this.props.handleLogin(account, password);
              } else {
                message.warn(data.msg);
              }
            });
          }}
        >
          OK
        </Button>
      </div>
    );
  }
}

const mapState = state => ({});

const mapDispatch = dispatch => ({
  handleLogin: (acc, pwd) => {
    dispatch(actionCreators.login(acc, pwd));
  }
});

export default connect(
  mapState,
  mapDispatch
)(Register);