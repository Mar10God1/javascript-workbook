'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentWillMount () {
    for (let i = 1; i < 50; i++) {
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
    let character = [];

    this.state.list.forEach((item, index) => {
      // Build link to starwars.com character page
      let name = item.name;
      let urlName = name.split(' ').join('-').toLowerCase();
      let urlBegining = 'http://www.starwars.com/databank/';
      let link = urlBegining + urlName;
      // Create character card
      character.push(<div key={index}>
        <h4>{item.name}</h4>
        <li>Birth Year: {item.birth_year}</li>
        <li>Gender: {item.gender}</li>
        <li>Hair Color: {item.hair_color}</li>
        <li>Eye Color: {item.eye_color}</li>
        <li>Skin Color: {item.skin_color}</li>
        <li>Height: {item.height}</li>
        <li>Mass: {item.mass}</li>
        <a href={link} target='_blank'> Learn more about {item.name}</a>
      </div>);
    });

    return (
      <div style={styles}>
        <img src='http://cdn1.sciencefiction.com/wp-content/uploads/2015/03/Star-Wars-Logo.png' />
          <h2>CHARACTERS</h2>
          {character}
      </div>
    );
  }
}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
