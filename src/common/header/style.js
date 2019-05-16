import styled from "styled-components";
import logo from "../../static/images/logo.png";

const activeColor = "#1890FF";

export const HeaderWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 8;
  height: 56px;
  margin: 0 auto;
  border-bottom: 1px solid #f0f0f0;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .03);
`;

export const Nav = styled.div`
  position: relative;
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  width: 100px;
  height: 56px;
  display: block;
  background: url(${logo});
  background-size: contain;
  float: left;
  cursor: pointer;
`;

export const Container = styled.div`
  height: 56px;
  margin: 0 auto;
  font-size: 13px;
`;

export const ContainerItem = styled.div`
  padding: 0 10px;
  line-height: 56px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
    font-size: 13px;
  }
  &.active {
    color: ${activeColor};
    font-weight: bold;
  }
  &.btn {
    height: 100%;
    display: flex;
    align-items: center;
    &:hover {
      background: transparent;
    }
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  z-index: 8;
  .slide-enter,
  .slide-exit {
    transition: all 0.5s ease;
  }
  .slide-enter-active {
    width: 268px;
  }
  .slide-exit-active {
    width: 188px;
  }
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    color: #999;
    cursor: pointer;
    &.focused {
      background: #969696;
      color: #fff;
    }
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 56px;
  width: 260px;
  padding: 5px 20px;
  border-radius: 4px;
  box-shadow: 2px 7px 40px rgba(0, 0, 0, 0.15);
  background: #fff;
`;

export const SearchInfoTitle = styled.div`
  line-height: 13px;
  margin-top: 10px;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  cursor: pointer;
`;

export const SearchInfoList = styled.ul`
  overflow: hidden;
  width: 100%;
  margin-bottom: 10px;
`;

export const SearchInfoItem = styled.span`
  float: left;
  margin-right: 8px;
  margin-top: 10px;
  white-space: nowrap;
  padding: 0 5px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
`;

export const ContainerSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 188px;
  height: 16px;
  outline: none;
  border: none;
  border-radius: 20px;
  margin-top: 8px;
  margin-left: 20px;
  padding: 20px 32px 20px 20px;
  background: #f0f0f0;
  font-size: 14px;
  float: left;
  /* transition: .5s ease; */
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 268px;
  }
`;

export const ZyBtn = styled.div`
  background: ${props => props.bgColor};
  height: 32px;
  line-height: 32px;
  font-size: 13px;
  color: #fff;
  padding: 0 20px;
  border-radius: 16px;
  &:hover {
    filter: brightness(110%);
  }
`;