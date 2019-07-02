import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import { IconFont } from "./static/iconfont/iconfont";
import "./scss/main.scss";
import "antd/dist/antd.css";
import "./scss/markdown.scss";
import "./scss/animate.scss";
import ZModal from "./common/modal";
import Home from "./pages/home";
import Login from "./pages/login";
import Detail from "./pages/detail/loadable";
import Write from "./pages/write";
import Practice from "./pages/practice";
import User from "./common/user";
import Forum from "./pages/forum/loadable";
import Admin from "./pages/admin"
import LearnRoute from "./pages/learn/LearnRoute";
import HTMLDoc from './pages/learn/components/doc/HTMLDoc';
import CSSDoc from './pages/learn/components/doc/CSSDoc';
import JSDoc from './pages/learn/components/doc/JSDoc';
import CodePan from './pages/codePan';
import DocDetail from './pages/learn/components/detail';
import ProblemDetail from "./pages/practice/Edit";
import DOCVue from "./pages/learn/components/doc/Vue";
import DOCReact from "./pages/learn/components/doc/React";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="zheye">
          <BrowserRouter>
            <Fragment>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/admin" exact component={Admin} />
              <Route path="/register" exact component={Login} />
              <Route path="/detail/:id" exact component={Detail} />
              <Route path="/write" exact component={Write} />
              <Route path="/practice" component={Practice} />
              <Route path="/user" component={User} />
              <Route path="/forum" component={Forum} />
              <Route path="/learn-route" exact component={LearnRoute} />
              <Route path="/DOC-HTML" exact component={HTMLDoc} />
              <Route path="/DOC-CSS" exact component={CSSDoc} />
              <Route path="/DOC-JavaScript" exact component={JSDoc} />
              <Route path="/DOC-Vue" exact component={DOCVue} />
              <Route path="/DOC-React" exact component={DOCReact} />
              <Route path="/code-pan" exact component={CodePan} />
              <Route path="/doc/detail/:id" exact component={DocDetail} />
              <Route path="/problem/detail/:id" exact component={ProblemDetail} />
            </Fragment>
          </BrowserRouter>
          <ZModal />
        </div>
        <IconFont />
      </Provider>
    );
  }
}

export default App;
