import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar, Menu, Dropdown, Icon } from "antd";
import "../style.scss";
import { actionCreators as loginActions } from "../../../pages/login/store";
import { actionCreators as userAction } from "../../user/store";

class UserMenu extends Component {
  render() {
    const { logout, info } = this.props;
    const menu = (
      <Menu style={{ width: "150px" }}>
        <Menu.Item key="1">
          <Link to="/user/info">
            <Icon type="user" />
            个人中心
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/user/setup">
            <Icon type="setting" />
            个人设置
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/user/info?view=collect">
            <Icon type="star" />
            收藏
          </Link>
        </Menu.Item>

        <Menu.Item key="4" onClick={logout}>
          <Icon type="logout" />
          退出登录
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu} placement="bottomRight">
        <div className="header-user-menu">
          <div className="img-wrapper">
            <Avatar src={info.get("avatar")} />
          </div>
          <span>{info.get("nickname")}</span>
        </div>
      </Dropdown>
    );
  }
}

const mapStateToProps = state => ({
  info: state.getIn(["user", "user", "info"]),
  auth: state.getIn(["user", "user", "auth"])
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(loginActions.logout());
    dispatch(userAction.Logout());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMenu);
