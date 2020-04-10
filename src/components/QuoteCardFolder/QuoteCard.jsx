import React from 'react';
import './QuoteCard.css';
import axios from 'axios';

class QuoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: ''
    };
    this.handleGetSimpsons = this.handleGetSimpsons.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then((response) => response.data)
      .then(data => {
        this.setState({
          simpson: data[0]
        });
      });
  }

  handleGetSimpsons() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState({
          simpson: data[0]
        });
      });
  }

  render() {
    const { simpson } = this.state;
    return (
      <div>
        <figure className='QuoteCard'>
          <img src={simpson.image} alt={simpson.character} />
          <figcaption>
            <blockquote>{simpson.quote}</blockquote>
            <p>
              <cite>{simpson.character}</cite>
            </p>
            <button onClick={this.handleGetSimpsons}>new quote</button>
          </figcaption>
        </figure>
      </div>
    );
  }
}

export default QuoteCard;
