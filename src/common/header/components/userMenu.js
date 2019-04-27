import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar, Menu, Dropdown, Icon } from "antd";
import "../style.scss";
import { actionCreators as loginActions } from "../../../pages/login/store";

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
        <Menu.Divider />
        <Menu.Item key="4">
          <Link to="/practice/upload">
            <Icon type="upload" />
            题库上传
          </Link>
        </Menu.Item>
        <Menu.Item key="5" onClick={logout}>
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
          junxio
        </div>
      </Dropdown>
    );
  }
}

const mapStateToProps = state => ({
  info: state.getIn(["user", "info"])
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(loginActions.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMenu);
