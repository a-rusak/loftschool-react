import React, { Component } from "react";
import Comment from "./Comment";
import "./NewsPost.css";

class NewsPost extends Component {
  state = {
    comments: [],
    commentInput: ""
  };

  handleChange = evt => {
    this.setState({
      commentInput: evt.target.value
    });
  };

  handleKeyDown = evt => {
    if (evt.keyCode === 13) {
      const { commentInput, comments } = this.state;
      const newComment = {
        id: this.props.id,
        text: commentInput
      };

      this.setState({
        commentInput: "",
        comments: [...comments, newComment]
      });
    }
  };

  handleDelete = commentId => {
    const comments = [...this.state.comments];
    comments.splice(commentId - 1, 1);
    this.setState({comments});
  };

  render() {
    const { text } = this.props;
    return (
      <article className="news-post">
        <h3>{text}</h3>
        <p>{text}</p>
        <label>Add comment:</label>
        <input
          className="comment-input"
          type="text"
          value={this.state.commentInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <section>
          <h4>Comments list</h4>
          {this.state.comments.map((it, index) => (
            <Comment
              key={index + 1}
              id={index + 1}
              text={it.text}
              onDelete={this.handleDelete}
            />
          ))}
        </section>
      </article>
    );
  }
}

export default NewsPost;
