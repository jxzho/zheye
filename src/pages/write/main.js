import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BraftEditor from "braft-editor";
import { Modal, Form, Input, message, Select } from "antd";
import "braft-editor/dist/index.css";
import "./style.scss";
import api from "../../api";
import ReactMarkdown from "react-markdown";
import { actionCreators as ModalAction } from "../../common/modal/store";
import UploadImage from "../../common/upload/uploadImage";
const Option = Select.Option;
// anticon anticon-picture

const extendControls = [
  {
    key: "insert-picture",
    type: "button",
    title: "插入图片",
    className: "insert-picture",
    html: null,
    text: "插入图片"
  },
  {
    key: "article-submit",
    type: "button",
    title: "点击发布",
    className: "article-submit",
    html: null,
    text: "发布"
  }
];
const controls = ["undo", "redo", "emoji", "clear"];

class Main extends PureComponent {
  state = {
    editorState: BraftEditor.createEditorState(null),
    title: "",
    visible: false,
    confirmLoading: false,
    contentType: "javascript"
  };

  handleEditorChange = editorState => {
    this.setState({ editorState });
  };

  onKeySave = () => {
    const { editorState } = this.state;
    console.log(editorState.toHTML());
  };

  formChange = e => {
    const value = e.target.value;
    this.setState({ title: value });
  };

  submitClick = () => {
    this.setState({ 
      visible: true
    });
  };

  handleOk = content => {
    const { user, history } = this.props;
    const { title, contentType } = this.state;
    const id = user.get("id");
    const data = {
      userId: id,
      title,
      contentType,
      content
    };
    this.setState({ confirmLoading: true });
    api.addArticle(data).then(res => {
      const data = res.data;
      const articleId = data.data.id;

      this.setState({ confirmLoading: false });
      if (data.result) {
        message.success(data.msg);
        history.push(`/detail/${articleId}`);
      } else {
        message.error(data.msg);
      }
    });
  };

  handleUploadFinished = (imgUrl) => {
    const { editorState } = this.state;
    this.setState({
      editorState: BraftEditor.createEditorState(
        editorState.toHTML() + 
        `![](${imgUrl})`
      )
    });
  };

  changeModal = () => {
    const { changeModal } = this.props;
    changeModal({
      visible: true,
      title: "插入图片",
      content: (
        <div className="insert-modal-area">
          <UploadImage uploadFinished={this.handleUploadFinished} />
        </div>
      ),
      onOk: () => {
        console.log("OK");
      }
    });
  };

  render() {
    const { mode } = this.props;
    const { editorState, visible, title, confirmLoading } = this.state;
    const content = mode ? editorState.toText() : editorState.toHTML();

    return (
      <div className="write-wrapper">
        <div className="edit-area">
          {mode ? (
            <BraftEditor
              value={editorState}
              onChange={this.handleEditorChange}
              onSave={this.onKeySave}
              extendControls={extendControls}
              controls={controls}
            />
          ) : (
            <BraftEditor
              value={editorState}
              onChange={this.handleEditorChange}
              onSave={this.onKeySave}
              extendControls={extendControls}
            />
          )}
        </div>
        <div
          className="text-show-area"
          dangerouslySetInnerHTML={!mode ? { __html: content } : null}
        >
          {mode ? <ReactMarkdown source={content} /> : null}
        </div>
        <Modal
          title="标题填写 / 类别选择"
          visible={visible}
          onOk={this.handleOk.bind(null, content)}
          onCancel={() => {
            this.setState({ visible: false });
          }}
          closable={false}
          confirmLoading={confirmLoading}
        >
          <Form layout="vertical">
            <Form.Item label="标题">
              <Input value={title} name="title" onChange={this.formChange} />
            </Form.Item>
            <Form.Item label="类别">
              <Select
                defaultValue="javascript"
                style={{ width: 120 }}
                onChange={value => { this.setState({ contentType: value }) }}
              >
                <Option value="javascript">javascript</Option>
                <Option value="css">css</Option>
                <Option value="html">html</Option>
                <Option value="react">react</Option>
                <Option value="vue">vue</Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }

  componentWillMount() {
    extendControls[0].onClick = this.changeModal;
    extendControls[1].onClick = this.submitClick;
  }
}

const mapState = state => ({
  user: state.getIn(["user", "user"]),
  mode: state.getIn(["write", "mode"])
});

const mapDispatch = dispatch => ({
  changeModal: data => dispatch(ModalAction.changeModal(data))
});

export default connect(
  mapState,
  mapDispatch
)(withRouter(Main));
