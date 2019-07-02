import React, { Component } from "react";
import { Upload, Icon, Modal } from 'antd';
import { actionCreators as ModalAction } from "../../common/modal/store";
import { connect } from "react-redux";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}


class UploadImage extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  uploadSuccess = (res) => {
    this.props.uploadFinished(res.data);
    this.props.changeModal({
      visible: false
    });
  };

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="upload-image-area">
        <div className="clearfix">
          <Upload
            name="image"
            action={`//localhost:8000/upload/image`}
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
            onSuccess={this.uploadSuccess}
          >
            {fileList.length >= 3 ? null : uploadButton}
          </Upload>
          <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </div>
      </div>
    )
  }
}

const mapState = state => ({});

const mapDispatch = dispatch => ({
  changeModal: data => dispatch(ModalAction.changeModal(data))
});

export default connect(
  mapState,
  mapDispatch
)(UploadImage);