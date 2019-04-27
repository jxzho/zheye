import styled from "styled-components";

const commonStyled = styled.div`
  background: #fff;
  padding: 15px 0;
  margin-bottom: 5px;
`;

export const Area = styled(commonStyled)`
  ul {
    overflow: hidden;
    margin-bottom: 0;
    li {
      width: 80px;
      height: 34px;
      float: left;
      text-align: center;
      color: #373d41;
      font-size: 14px;
      line-height: 34px;
      cursor: pointer;
      margin-right: 5px;
      margin-bottom: 5px;
      transition: 0.2s;
      border-radius: 2px;

      &.active {
        color: #fff;
        background: #36f;
      }
      &:hover {
        background: #4775ff;
        color: #fff;
      }
    }
  }
`;

export const ContentItem = styled(commonStyled)`
  transition: 0.2s;

  .item-info {
    .main-info {
      h3 {
        font-size: 15px;
      }
    }
    .less-info {
      span {
        font-size: 13px;
        color: #8e8e8e;
        margin-right: 10px;
      }
    }
  }
  &:hover {
    background: #fcfcfc;
    h3 {
      color: #3366ff;
    }
  }
`;
