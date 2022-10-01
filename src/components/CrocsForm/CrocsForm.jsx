import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';
import Select from 'react-select'

const initialValues = {
	starSign: 0,
	height: '',
	date: ''
}

const options = [
  { value: 11, label: 'Aries' },
  { value: 3, label: 'Taurus' },
  { value: 2, label: 'Gemini' },
  { value: 1, label: 'Cancer' },
  { value: 6, label: 'Leo' },
  { value: 5, label: 'Virgo' },
  { value: 0, label: 'Libra' },
  { value: 10, label: 'Scorpio' },
  { value: 7, label: 'Sagittarius' },
  { value: 8, label: 'Capricorn' },
  { value: 9, label: 'Aquarius' },
  { value: 4, label: 'Pisces' },
]

const CrocsForm = ({ change }) => {
	const [state, setState] = useState(initialValues);

	const handleChange = e => {
		let { value, name } = e.target;
		const date = new Date().toLocaleString().split(',')[0];
		setState({
			...state,
			[name]: value,
			date
		});
	};

	const handleStarSignChange = starSign => {
	const date = new Date().toLocaleString().split(',')[0];
    setState({ 
    ...state,
    starSign: starSign,
    date
    });
  };

	const handleSubmit = () => {
		change(state);
		setState(initialValues);
	};

	return (
		<>
			<div className="row">
				<div className="col m6 s12">
					
        <label>
          Pick your Star Sign:
        </label>


      <Select options={options}
      value={state.starSign}
        onChange={handleStarSignChange} />
        </div>

				<div className="col m6 s12">
					<label htmlFor="height">Height (in cm)</label>
					<input
						id="height"
						name="height"
						type="number"
						min="1"
						max="999"
						placeholder="176"
						value={state.height}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="center">
				<button
					id="crocs-btn"
					className="calculate-btn"
					type="button"
					disabled={state.starSign === '' || state.height === ''}
					onClick={handleSubmit}
				>
					Calculate Crocs
				</button>
			</div>
		</>
	);
};

CrocsForm.propTypes = {
	change: PropTypes.func.isRequired
};

export default CrocsForm;
