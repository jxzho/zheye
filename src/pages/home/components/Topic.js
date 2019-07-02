import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Tag, Skeleton } from "antd";
import { TopicWrapper, TopicItem } from "../style";

class Topic extends PureComponent {
  state = {
    activeIndex: -1
  }

  handleMouseEnter = index => {
    this.setState({
      activeIndex: index
    });
  };

  handleMouseLeave = () => {
    this.setState({
      activeIndex: -1
    });
  }

  render() {
    const { list, isListLoading } = this.props;
    const { activeIndex } = this.state;
    return (
      <TopicWrapper>
        <Tag color="#108ee9">学习文档区</Tag>
        <div className="topic-list">
          {isListLoading
            ? (
              <div style={{ display: "flex" }}>
                <Skeleton avatar active paragraph={false}/>
                <Skeleton avatar active paragraph={false}/>
                <Skeleton avatar active paragraph={false}/> 
                <Skeleton avatar active paragraph={false}/> 
                <Skeleton avatar active paragraph={false}/> 
              </div>
            )
            : list.map((item, index) => (
              <Link to={`/DOC-${item.get('title')}`} key={item.get('title')}>
                <TopicItem
                  key={item.get('title')}
                  className={activeIndex === index ? "animated infinite heartBeat" : ""}
                  onMouseEnter={this.handleMouseEnter.bind(null, index)}
                  onMouseLeave={this.handleMouseLeave}
                >
                  <img
                    className="topic-pic"
                    src={item.get('imgUrl')} alt=""
                  />
                  {item.get('title')}
                </TopicItem>
              </Link>
            ))}
        </div>
      </TopicWrapper>
    );
  }
}

const mapState = state => ({
  list: state.getIn(["home", "topicList"]),
  isListLoading: state.getIn(["home", "isListLoading"]),
});

const mapDispatch = null;

export default connect(
  mapState,
  mapDispatch
)(Topic);
