import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import { actionCreators as userAction } from "../store";
import '../style.scss';

class Ser extends Component {
  state = {
    acc: "",
    pwd: ""
  }

  infoSubmit = e => {
    const data = this.state;
    const { updateInfo, user } = this.props;
    updateInfo(user.get('id'), {
      password: data.pwd
    });
  };

  handlePwdChange = e => {
    this.setState({
      pwd: e.target.value
    })
  }

  render() {
    const { acc, pwd } = this.state;
    return (
      <div className="sercurity-area">
        <div>
          <Input value={acc} disabled={true} style={{ width: 200 }}/>
        </div>
        <Input.Password 
          value={pwd} 
          onChange={this.handlePwdChange}
          style={{ width: 200 }}
        />
        <div>
          <Button type="primary" onClick={this.infoSubmit}>
            修改
          </Button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const user = this.props.user;
    this.setState({
      acc: user.get("account"),
      pwd: user.get("password")
    });
  }
}

const mapState = state => ({
  user: state.getIn(["user", "user"])
});

const mapDispatch = dispatch => ({
  updateInfo: (id, data) => dispatch(userAction.updateInfo(id, data))
});

export default connect(
  mapState,
  mapDispatch
)(Ser);