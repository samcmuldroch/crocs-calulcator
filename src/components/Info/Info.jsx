import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ starSign, currentCrocs, id, date, crocs, deleteCard }) => {
  const handleDelete = () => {
    deleteCard(id);
  };

  console.log(currentCrocs)
  console.log(starSign)

  return (
    <div className="col m6 s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title" data-test="crocs">
            Number of Crocs to Buy: {crocs}
          </span>
          <div className="card-data">
            <span data-test="starSign">Star Sign: {starSign.label}</span>
            <span data-test="currentCrocs">Current Crocs: {currentCrocs.label}</span>
            <span data-test="date">Date: {date}</span>
          </div>

          <button className="delete-btn" onClick={handleDelete}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  starSign: PropTypes.object,
  currentCrocs: PropTypes.object,
  id: PropTypes.string,
  date: PropTypes.string,
  crocs: PropTypes.number,
  deleteCard: PropTypes.func
};

export default Info;
