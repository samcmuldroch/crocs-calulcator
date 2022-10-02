import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ starSign, height, id, date, crocs, deleteCard }) => {
  const handleDelete = () => {
    deleteCard(id);
  };

  return (
    <div className="col m6 s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title" data-test="crocs">
            Number of Crocs: {crocs}
          </span>
          <div className="card-data">
            <span data-test="starSign">Star Sign: {starSign.label}</span>
            <span data-test="height">Height: {height} cm</span>
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
  height: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.string,
  crocs: PropTypes.string,
  deleteCard: PropTypes.func
};

export default Info;
