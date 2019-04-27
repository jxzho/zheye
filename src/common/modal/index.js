import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from 'antd';
import { actionCreators as modalAction } from '../modal/store';

class ZModal extends Component {
  onOk = () => {
    this.props.modal.get('onOk')();
    this.closeModal();
  };

  onCancel = () => {
    this.closeModal();
  };

  closeModal = () => {
    const { changeModal } = this.props;
    changeModal({ visible: false });
  }

  render() {
    const { modal } = this.props;
    return (
      <Modal 
        title={modal.get('title')}
        visible={modal.get('visible')}
        onOk={this.onOk}
        onCancel={this.onCancel}
        closable={false}
      >
        {modal.get('content')}
      </Modal>
    )
  }
}

const mapState = state => ({
  modal: state.get('modal')
});

const mapDispatch = dispatch => ({
  changeModal: data => dispatch(modalAction.changeModal(data))
});

export default connect(
  mapState,
  mapDispatch
)(ZModal);