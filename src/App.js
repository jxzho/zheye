import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import { IconFont } from "./static/iconfont/iconfont";
import "./scss/main.scss";
import "antd/dist/antd.css";
import "./scss/markdown.scss";
import ZModal from "./common/modal";
import Home from "./pages/home";
import Login from "./pages/login";
import Detail from "./pages/detail/loadable";
import Write from "./pages/write";
import Practice from "./pages/practice";
import User from "./common/user";
import Forum from "./pages/forum";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="zheye">
          <BrowserRouter>
            <Fragment>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Login} />
              <Route path="/detail/:id" exact component={Detail} />
              <Route path="/write" exact component={Write} />
              <Route path="/practice" component={Practice} />
              <Route path="/user" component={User} />
              <Route path="/forum" component={Forum} />
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
