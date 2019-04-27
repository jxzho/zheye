import styled from "styled-components";
const bgImg = "https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg";

export const LoginWrapper = styled.div`
  height: 100vh;
  background: #f0f2f5 url(${bgImg}) no-repeat center/100% 100%;
  overflow: hidden;
  z-index: 9;
`;

export const LoginBox = styled.div`
  width: 400px;
  margin: 50px auto 0 auto;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
`;
