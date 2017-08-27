'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { "data-stack": "1" },
        React.createElement("div", { "data-block": "100" }),
        React.createElement("div", { "data-block": "75" }),
        React.createElement("div", { "data-block": "50" }),
        React.createElement("div", { "data-block": "25" })
      ),
      React.createElement("div", { "data-stack": "2" }),
      React.createElement("div", { "data-stack": "3" })
    );
  }
}

ReactDOM.render(React.createElement(TowersOfHanoi, null), document.getElementById('towers-of-hanoi'));