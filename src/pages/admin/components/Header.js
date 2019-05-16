import React, { PureComponent } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Icon } from 'antd';

class AdminHeader extends PureComponent {
  handleReturn = () => {
    this.props.history.go(-1);
  };

  render() {
    return (
      <header>
        <Icon type="left" onClick={this.handleReturn} />
      </header>
    )
  }
}

const mapState = state => ({
});

const mapDispatch = dispatch => ({

});

export default connect(
  mapState,
  mapDispatch
)(withRouter(AdminHeader));