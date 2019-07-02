import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BtnRun from "./btn/run";
import BtnLan from "./btn/lan";

class Header extends PureComponent {
  render() {
    return (
      <header>
        <BtnLan />
        <div className="btn-action">
          <BtnRun />
        </div>
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
)(withRouter(Header));