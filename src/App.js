import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Autocomplete from 'react-autocomplete'

class App extends Component {

  constructor(props) {
    super(props);

    this.loadResults = this.loadResults.bind(this);
    this.handleClick = this.handleClick.bind(this);

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

  render() {
    return (
      <div className="App">

        Ukradli mi 
        <Autocomplete
          key="autocomplete"
          getItemValue={(item) => item.label}
          items={[
            { label: 'rower kellys' },
            { label: 'buty alpinus' }
          ]}
          renderItem={(item, isHighlighted) =>
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.label}
            </div>
          }
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          onSelect={value => this.setState({ value })}
        />
        
        <button onClick={this.handleClick}>
          Znajdź
        </button>

        <br />

        {this.state.cards.map(card => <Card key={card.imgUrl} imageUrl={card.imgUrl} />)}
      </div>
    );
  }
}
export default App;
