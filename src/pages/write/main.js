import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BraftEditor from "braft-editor";
import { Modal, Form, Input, Tag, message } from "antd";
import "braft-editor/dist/index.css";
import "./style.scss";
import api from "../../api";
import ReactMarkdown from "react-markdown";

const extendControls = [
  {
    key: "article-submit",
    type: "button",
    title: "点击发布",
    className: "article-submit",
    html: null,
    text: "发布"
  }
];
const controls = ["undo", "redo", "emoji", "media", "clear"];

class Main extends PureComponent {
  state = {
    editorState: BraftEditor.createEditorState(null),
    title: "",
    visible: false,
    confirmLoading: false
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
    this.setState({ visible: true });
  };

  handleOk = (content) => {
    const { user, history } = this.props;
    const { title } = this.state;
    const id = user.get("id");
    const data = {
      userId: id,
      title,
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
          title="标题填写 / 标签选择"
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
            <Form.Item label="标签">
              <Tag>前端</Tag>
              <Tag>JS</Tag>
              <Tag>Vue</Tag>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }

  componentDidMount() {
    extendControls[0].onClick = this.submitClick;
  }
}

const mapState = state => ({
  user: state.getIn(["user", "user"]),
  mode: state.getIn(["write", "mode"])
});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(withRouter(Main));
