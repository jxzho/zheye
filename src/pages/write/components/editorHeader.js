import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import UserMenu from "../../../common/header/components/userMenu";
import { Icon } from "antd";
import MdController from './mdController';

class EditorHeader extends PureComponent {
  render() {
    return (
      <header className="eidtor-header-wrapper">
        <Link to="/">
          <Icon type="left" />
        </Link>
        <MdController />
        <UserMenu />
      </header>
    );
  }
}

const mapState = state => ({});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(EditorHeader);
