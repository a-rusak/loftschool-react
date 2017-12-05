import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { request } from '../../actions/search';
import {
  getQuery,
  getShows,
  getIsFetched,
  getIsFetching,
  getError
} from '../../reducers/search';
import { Link } from 'react-router-dom';
import './Search.css';

class Search extends PureComponent {
  state = {
    value: this.props.query
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
    const { shows, error, isFetched, isFetching } = this.props;

    if (error !== null) {
      return <p style={{ color: 'red' }}>Ошибка! {error}</p>;
    }

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
          {isFetching && (
            <li>
              <p>Идет загрузка</p>
            </li>
          )}
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
                    alt={name}
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
  query: getQuery(state),
  shows: getShows(state),
  error: getError(state),
  isFetched: getIsFetched(state),
  isFetching: getIsFetching(state)
});

const mapDispatchToProps = {
  request
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
