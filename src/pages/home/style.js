import styled from "styled-components";

export const HomeWrapper = styled.div`
  margin: 0 auto;
  background: #fff;
  width: 960px;
  margin-top: 20px;
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;
export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 25px;
  float: left;
  .img {
    width: 625px;
    height: 270px;
    img {
      width: 100%;
      border-radius: 8px;
    }
  }
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  .topic-list {
    margin-top: 10px;
  }
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-right: 18px;
  padding-right: 15px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #f7f7f7;
  margin-bottom: 18px;
  cursor: pointer;
  .topic-pic {
    display: block;
    float: left;
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
`;

export const ListItem = styled.div`
  margin: 20px 0 10px 0;
  border-right: 10px solid #1890FF;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  height: 150px;
  position: relative;
  &:hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  }

  .show-content {
    display: flex;
    align-items: center;
    .pic {
      display: block;
      width: 150px;
      height: 100px;
      border-radius: 2px;
    }
  }

  .zheye-ac-link {
    position: absolute;
    bottom: 0;
  }
`;

export const ListInfo = styled.div`
  width: 100%;
  float: left;
  margin-right: 20px;
  .title {
    line-height: 20px;
    font-size: 15px;
    font-weight: bold;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  width: 280px;
`;

export const RecommendItem = styled.div`
  position: relative;
  width: 280px;
  height: 50px;
  font-size: 18px;
  line-height: 50px;
  background-color: ${props => props.bgColor};
  margin-bottom: 10px;
  border-radius: 4px;
  padding: 0 20px;
  color: #fff;
  cursor: pointer;
  transition: all .3s ease;
  &:hover {
    transform: scale(1.1) translateX(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, .3);
  }

  .anticon {
    margin: 0 8px;
  }
  .right {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const WriterWrapper = styled.div`
  width: 278px;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 20px;
  margin: 30px 0;
  .click {
    color: #1890ff;
    cursor: pointer;
  }
`;

export const RecorderWrapper = styled.div`
  border-radius: 2px;
  margin-bottom: 10px;
  display: flex;
  padding: 10px;
  transition: all .2s linear;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, .2);
  }

  .left {
    display: flex;
    flex-direction: column;
    border-right: 1px dashed #eee;
    font-weight: bold;
    padding-right: 10px;
    .week {
      font-size: 20px;
    }
    .date {

    }
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    .info {
      display: flex;
      flex-direction: column;
      .top {

      }
      .bottom {

      }
    }
  }
`;
