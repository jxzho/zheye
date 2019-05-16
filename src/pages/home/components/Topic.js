import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Tag } from "antd";
import { TopicWrapper, TopicItem } from "../style";

class Topic extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        <Tag color="#108ee9">学习文档区</Tag>
        <div className="topic-list">
          {list.map(item => (
            <TopicItem key={item.get('title')}>
              <img
                className="topic-pic"
                src={item.get('imgUrl')} alt=""
              />
              {item.get('title')}
            </TopicItem>
          ))}
        </div>
      </TopicWrapper>
    );
  }
}

const mapState = state => ({
  list: state.getIn(["home", "topicList"])
});

const mapDispatch = null;

export default connect(
  mapState,
  mapDispatch
)(Topic);
