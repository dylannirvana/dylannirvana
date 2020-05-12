import React, { Component } from 'react';
import NewSingle from './NewSingle';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b1d3b456717c4a2e921dd4cb0379e828';

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles
        })
      })
      .catch((error) => console.log(error));
  }

  renderItems() {
    return this.state.news.map((item) => (
      <NewSingle key={item.url} item={item} />
    ));
  }

  render() {
    return (
      <Container>
        <Row>
        {this.renderItems()}
        </Row>
      </Container>
    );
  }
}

export default News;