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
    const url = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b1d3b456717c4a2e921dd4cb0379e828';
    // Use REST Client plugin (or Postman) to identify Singleton if needed
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles // this is what you are looking for
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
        {/* Using Bootstrap styles */}
        <p>Resolving issue why news is not showing on server.</p>
        <Row>
        {this.renderItems()}
        </Row>
      </Container>
    );
  }
}

export default News;