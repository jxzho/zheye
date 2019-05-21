import React, { Component } from 'react';
import { Select, Form, Input, message } from 'antd';
import BraftEditor from "braft-editor";
import ReactMarkdown from "react-markdown";
import api from "../../../api";
const Option = Select.Option;

const extendControls = [
  {
    key: "doc-upload-key",
    type: "button",
    title: "点击上传",
    className: "doc-upload-btn",
    html: null,
    text: "上传"
  }
];

const controls = ["undo", "redo", "emoji", "clear"];

class DocUpload extends Component {
  state = {
    type: 3,
    title: "",
    editorState: BraftEditor.createEditorState(null),
  }

  handleTypeChange = type => {
    this.setState({ type });
  };

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleEditorChange = editorState => {
    this.setState({ editorState });
  };

  handleUpload = () => {
    const { type, title, editorState } = this.state;
    const data = {
      type,
      title,
      content: editorState.toText()
    };
    api.uploadDoc(type, data).then(res => {
      const data = res.data;
      if (data.result) {
        message.success("文档上传成功！");
      }
    });
  };

  render() {
    const { editorState, type } = this.state;
    return (
      <div className="doc-upload-panel">
        <div className="doc-edit">
          <Form layout="vertical" onChange={this.handleFormChange}>
            <Form.Item label="文档名称">
              <Select defaultValue={type} style={{ width: 120 }} onChange={this.handleTypeChange}>
                <Option value={1}>JavaScript</Option>
                <Option value={2}>CSS</Option>
                <Option value={3}>HTML</Option>
              </Select>
            </Form.Item>
            <Form.Item label="一级标题">
              <Input name="title" />
            </Form.Item>
            <Form.Item label="内容">
              <BraftEditor
                value={editorState}
                onChange={this.handleEditorChange}
                extendControls={extendControls}
                controls={controls}
                onSave={this.handleUpload}
              />
            </Form.Item>
          </Form>
        </div>
        <div className="doc-edit-show">
          <h1>标题：{this.state.title}</h1>
          <h2>内容：</h2>
          <div className="doc-content">
            <div className="md-show-content"> 
              <ReactMarkdown source={editorState.toText()} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    extendControls[0].onClick = this.handleUpload;
  }
}

export default DocUpload;