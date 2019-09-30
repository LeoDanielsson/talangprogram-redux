import React from 'react';
import { connect } from 'react-redux';
import { fetchDogs } from '../actions';

const Dogs = ({ dispatch, loading, error, dogs }) => {
  const onFetchDogsClick = () => {
    dispatch(fetchDogs());
  };

  return (
    <div>
      <h2>Dogs</h2>
      <button onClick={onFetchDogsClick}>Fetch dogs</button>

      {error && <div>An error occured fetching dogs</div>}

      {loading && <div>Loading dogs...</div>}

      {dogs.map(dog => (
        <div>{dog}</div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  dogs: state.dog.dogs,
  loading: state.dog.loading,
  error: state.dog.error
});

export default connect(mapStateToProps)(Dogs);
