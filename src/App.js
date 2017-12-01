import React, { Component } from "react";
import NewsPost from "./NewsPost";
import "./App.css";
class App extends Component {
  state = {
    news: [],
    newsInput: ""
  };

  handleChange = evt => {
    this.setState({
      newsInput: evt.target.value
    });
  };

  handleKeyDown = evt => {
    if (evt.keyCode === 13) {
      const { newsInput, news } = this.state;
      const newNews = { text: newsInput };

      this.setState({
        newsInput: "",
        news: [...news, newNews]
      });
    }
  };

  render() {
    return (
      <div className="App">
        <label>Add news:</label>
        <input
          type="text"
          value={this.state.newsInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <h2>News list</h2>
        {this.state.news.map((it, index) => (
          <NewsPost key={index + 1} text={it.text} />
        ))}
      </div>
    );
  }
}

export default App;
