import React from "react";
import { connect } from "react-redux";
import { Tag, Input, Tooltip, Icon } from 'antd';
import { actionCreators as userAction } from "../store";

class Tags extends React.Component {
  state = {
    tags: [],
    inputVisible: false,
    inputValue: '',
  };

  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
    this.updateTags(tags);
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.updateTags(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  updateTags = tags => {
    const { updateInfo, user } = this.props;
    updateInfo(user.get('id'), { tag: JSON.stringify(tags) });
  };

  saveInputRef = input => (this.input = input);

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
      <div className="tag-wrapper">
        {tags.map((tag, index) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag key={tag} closable={true} onClose={() => this.handleClose(tag)}>
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
            <Icon type="plus" /> New Tag
          </Tag>
        )}
      </div>
    );
  }

  componentDidMount() {
    const tag = this.props.info.get("tag");
    this.setState({
      tags: tag ? JSON.parse(tag) : []
    });
  }
}


const mapState = state => ({
  user: state.getIn(["user", "user"]),
  info: state.getIn(["user", "user", "info"]),
});

const mapDispatch = dispatch => ({
  updateInfo: (id, data) => dispatch(userAction.updateInfo(id, data))
});

export default connect(
  mapState,
  mapDispatch
)(Tags);