import React, { Component } from "react";
import "./Comment.css";

class Comment extends Component {
  handleDelete = evt => {
    this.props.onDelete(this.props.id);
  };
  render() {
    const { text } = this.props;
    return (
      <article>
        <span
          className="delete"
          role="img"
          aria-label="Delete"
          onClick={this.handleDelete}
        >
          ❌
        </span>
        <p>{text}</p>
      </article>
    );
  }
}

export default Comment;
