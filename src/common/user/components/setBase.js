import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, message  } from "antd";
import { actionCreators as userAction } from "../store";
import api from "../../../api";
import SetAvatar from './setAvatar';
import ZTag from "./Tags";
const { TextArea } = Input;

class Base extends Component {
  state = {
    email: "",
    nickname: "",
    brief: "",
    tel: ""
  };

  infoSubmit = e => {
    const data = this.state;
    const { updateInfo, user } = this.props;
    updateInfo(user.get('id'), data);
  };

  formChange = e => {
    const type = e.target.name;
    const value = e.target.value;
    this.setState({ [type]: value });
  };

  render() {
    const { email, nickname, brief, tel, tag } = this.state;
    return (
      <div className="base">
        <div className="left">
          <Form layout="vertical" onChange={this.formChange}>
            <Form.Item label="邮箱">
              <Input value={email} name="email" />
            </Form.Item>
            <Form.Item label="昵称">
              <Input value={nickname} name="nickname" />
            </Form.Item>
            <Form.Item label="个人简介">
              <TextArea value={brief} name="brief" />
            </Form.Item>
            <Form.Item label="Tel">
              <Input value={tel} name="tel" />
            </Form.Item>
            <Form.Item label="标签">
              <ZTag />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={this.infoSubmit}>
                更新基本信息
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="right">
          <SetAvatar />
        </div>
      </div>
    );
  }

  async componentDidMount() {
    const id = this.props.user.get("id");
    const hide = message.loading("信息加载中...", 0);
    const { data } = await api.getInfo(id);
    hide();
    const { email, nickname, brief, tel } = data.data;
    data.result && this.setState({ email, nickname, brief, tel });
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
)(Base);
