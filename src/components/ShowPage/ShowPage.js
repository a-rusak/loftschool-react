import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { request, success, failure } from '../../actions/show';
import {
  getShow,
  getIsFetched,
  getIsFetching,
  getError
} from '../../reducers/show';

class Show extends PureComponent {
  render() {
    const { name, summary, image } = this.props.show;
    return (
      <article style={{ display: `grid`, gridTemplateColumns: `12em` }}>
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
    );
  }
}

class ShowPage extends PureComponent {
  componentDidMount() {
    const {
      isFetched,
      isFetching,
      request,
      match: { params: { id } }
    } = this.props;

    if (!isFetched && !isFetching) {
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
