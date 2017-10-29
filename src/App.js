import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Autocomplete from 'react-autocomplete'
import { Navbar, FormGroup, FormControl, Jumbotron, Button } from 'react-bootstrap';


class App extends Component {

  constructor(props) {
    super(props);

    this.loadResults = this.loadResults.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      cards: [],
      value: ''
    };
  }
  
  loadResults(searchTerm) {
    fetch('https://nfve4zw03a.execute-api.eu-west-1.amazonaws.com/api/' + searchTerm)
      .then( response => 
      { 
        console.log(response)
        response.json().then(cardList => {
          console.log(cardList)
          this.setState({ 
            cards: cardList 
          });
        });
      });
  }

  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked:' + this.state.value);
    this.loadResults(this.state.value);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="App">

        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Ukradli mi</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" value={this.state.value} onChange={this.handleChange} />
              </FormGroup>
              {' '}
              <Button onClick={this.handleClick}>Znajdź</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
        {this.state.cards.map(card => <Card key={card.imgUrl} imageUrl={card.imgUrl} />)}
      </div>
    );
  }
}
export default App;
