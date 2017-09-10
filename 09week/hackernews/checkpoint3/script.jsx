'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor (props) {
    super(props);
    //state
    this.state = {
      list: []
    };
  }

  componentWillMount () {
    for (let i = 1; i < 100; i++) {
      fetch(`https://swapi.co/api/people/${i}/`).then((response) => {
        response.json().then((data) => {
          this.setState({
            list: this.state.list.concat([data])
          });
        });
      });
    }
  }

  render () {
    let names = [];
    let birthYear = [];
    let gender = [];
    let hair = [];
    let eyes = [];
    let skin = [];
    let height = [];
    let weight = [];

    this.state.list.forEach((item, index) => {
      names.push(<li key={index}>{item.name}</li>);
      birthYear.push(<li key={index}>{item.birth_year}</li>);
      gender.push(<li key={index}>{item.gender}</li>);
      hair.push(<li key={index}>{item.hair_color}</li>);
      eyes.push(<li key={index}>{item.eye_color}</li>);
      skin.push(<li key={index}>{item.skin_color}</li>);
      height.push(<li key={index}>{item.height}</li>);
      weight.push(<li key={index}>{item.mass}</li>);
    });

    return (
      <div style={styles}>
        <h3>CHARACTERS</h3>
        <div id='table'>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Birth Year</th>
                <th>Gender</th>
                <th>Hair</th>
                <th>Eyes</th>
                <th>Skin</th>
                <th>Height</th>
                <th>Weight</th>
              </tr>
              <tr>
                <td>{names}</td>
                <td>{birthYear}</td>
                <td>{gender}</td>
                <td>{hair}</td>
                <td>{eyes}</td>
                <td>{skin}</td>
                <td>{height}</td>
                <td>{weight}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
