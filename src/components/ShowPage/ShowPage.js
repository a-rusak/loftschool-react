import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { request } from '../../actions/show';
import {
  getShow,
  getIsFetched,
  getIsFetching,
  getError
} from '../../reducers/show';
import './ShowPage.css';

class Show extends PureComponent {
  render() {
    const { name, summary, image, _embedded: { cast } } = this.props.show;

    return (
      <div className="ShowPage">
        <Link to="/"><span role="img" aria-label="Back to list">🔙</span> Back to list</Link>
        <article className="title">
          <img
            className="show-item__image"
            src={
              image
                ? image.medium
                : `http://via.placeholder.com/210x295/000000?text=No+Image`
            }
            alt=""
          />
          <section className="text">
            <h1>{name}</h1>
            <div
              className="show-item__summary"
              dangerouslySetInnerHTML={{ __html: summary }}
            />
          </section>
        </article>
        <ul className="show-list">
          {cast.map((person, index) => {
            const { person: { name, image, id }, character } = person;
            return (
              <li className="show-item" key={`person_${id}_${index}`}>
                <img
                  className="show-item__image"
                  src={
                    image
                      ? image.medium
                      : `http://via.placeholder.com/210x295/000000?text=No+Image`
                  }
                  alt={name}
                />
                <h3>{name}</h3>
                <h4>{character.name}</h4>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class ShowPage extends PureComponent {
  componentDidMount() {
    const { isFetching, request, match: { params: { id } } } = this.props;

    if (!isFetching) {
      request(id);
    }
  }

  render() {
    const { isFetched, isFetching, error, show } = this.props;

    if (error !== null) {
      return <p style={{ color: 'red' }}>Ошибка! {error}</p>;
    }

    return (
      <div>
        {isFetching && <p>Идет загрузка</p>}
        {isFetched && <Show show={show} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  show: getShow(state),
  error: getError(state),
  isFetched: getIsFetched(state),
  isFetching: getIsFetching(state)
});

const mapDispatchToProps = {
  request
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
