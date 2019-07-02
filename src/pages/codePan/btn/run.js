import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "antd";

class Run extends PureComponent {
  handleRunClick = () => {
    const { cssCode, jsCode, htmlCode, iframe } = this.props;

    let doc = '';
    let docStr = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script type="text/javascript">
          ${jsCode}
          </script>
        </body>
      </html>
    `;

    if (iframe.contentDocument) {
      doc = iframe.contentDocument;
    }
    else if (iframe.contentWindow) {
      doc = iframe.contentWindow.document
    } else {
      doc = iframe.document
    };

    doc.open();
    doc.writeln(docStr);
    doc.close();
  };

  render() {
    return (
      <Button
        icon="redo"
        style={{ fontSize: 4 }}
        size="small"
        onClick={this.handleRunClick}
      >
        run
      </Button>
    )
  }
}

const mapState = state => ({
  cssCode: state.getIn(['codePan', 'cssCode']),
  htmlCode: state.getIn(['codePan', 'htmlCode']),
  jsCode: state.getIn(['codePan', 'jsCode']),
  iframe: state.getIn(['codePan', 'eleIframe']),
});

const mapDispatch = dispatch => ({

});

export default connect(
  mapState,
  mapDispatch
)(withRouter(Run));