import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { request, success, failure } from '../../actions/search';
import { getShows, getIsFetched } from '../../reducers/search';
import { Link } from 'react-router-dom';
import './Search.css';

class Search extends PureComponent {
  state = {
    value: `day`
  };

  onSearch = evt => {
    evt.preventDefault();
    const { request } = this.props;
    const { value } = this.state;
    request(value);
  };

  onChange = evt => {
    const value = evt.target.value;
    this.setState({ value });
  };

  render() {
    const { searchResult: { shows }, isFetched } = this.props;

    return (
      <main>
        <section className="search">
          <h1 className="search__title">Search</h1>
          <input
            className="search__input"
            type="search"
            value={this.state.value}
            onChange={this.onChange}
          />
          <button className="search__button" onClick={this.onSearch}>
            Find
          </button>
        </section>
        <ul className="show-list">
          {isFetched &&
            shows.map(show => {
              const { name, image, id, summary } = show;
              return (
                <li className="show-item" key={id}>
                  <img
                    className="show-item__image"
                    src={
                      image
                        ? image.medium
                        : `http://via.placeholder.com/210x295/000000?text=No+Image`
                    }
                    alt=""
                  />
                  <h2>
                    <Link to={`/shows/${id}`}>{name}</Link>
                  </h2>
                  <div
                    className="show-item__summary"
                    dangerouslySetInnerHTML={{ __html: summary }}
                  />
                </li>
              );
            })}
        </ul>
      </main>
    );
  }
}
const mapStateToProps = state => ({
  searchResult: getShows(state),
  isFetched: getIsFetched(state)
});

const mapDispatchToProps = {
  request
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
