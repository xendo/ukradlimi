import React, { Component } from 'react';
import { Image } from 'react-bootstrap';


class Card extends Component {
  render() {
    return <Image src={this.props.imageUrl} rounded/>;
  }
}

export default Card