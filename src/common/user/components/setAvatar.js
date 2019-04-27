import React, { Component } from "react";
import { connect } from "react-redux";
import { Upload, message, Avatar, Icon } from "antd";
import { actionCreators as userAction } from '../store';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = file => {
  const isJPG = file.type === "image/jpeg";
  const isPNG = file.type === "image/png";
  const fitType = (isJPG || isPNG);
  if (!fitType) {
    message.error("You can only upload JPG / PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return fitType && isLt2M;
};

class SetAvatar extends Component {
  state = {
    loading: false
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };

  uploadSuccess = (ret) => {
    const { changeInfo, info } = this.props;
    changeInfo({
      ...info.toJS(),
      avatar: ret.data.imgUrl
    });
  };

  render() {
    const { info, user } = this.props;
    const { imageUrl, loading } = this.state;
    const uploadButton = (
      <div>
        <Icon type={loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="avatar-wrapper">
        <Avatar
          src={info.get('avatar')}
          size={200}
        />
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action={`//localhost:8000/user/${user.get('id')}/avatar`}
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
          onSuccess={this.uploadSuccess}
        >
          {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
        </Upload>
      </div>
    );
  }
}

const mapState = state => ({
  info: state.getIn(['user', 'info']),
  user: state.getIn(['user', 'user'])
});

const mapDispatch = dispatch => ({
  changeInfo: (data) => dispatch(userAction.changeInfo(data))
});

export default connect(
  mapState,
  mapDispatch
)(SetAvatar);
