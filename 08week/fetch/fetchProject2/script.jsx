'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    }
  }

  componentWillMount() {
    fetch('http://services.groupkt.com/country/get/all').then((response) => {
      response.json().then((data) => {
        this.setState({
          list: data.RestResponse.result
        });
      });
    });
  }

  render() {
    let lis = [];

    this.state.list.forEach((item, index) => {
      lis.push(<li key={index}>{item.name}</li>);
    });

    return (
      <div>
        <h1>Test List</h1>
        <ul>
          {lis}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
