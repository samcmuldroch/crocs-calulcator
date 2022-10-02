import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';
import Select from 'react-select'

const initialValues = {
	starSign: 0,
	currentCrocs: 0,
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

const optionsCurrentCrocs = [
  { value: 0, label: 'Zero' },
  { value: 1, label: 'One' },
  { value: 2, label: 'Two' },
  { value: 3, label: 'Three' },
  { value: 4, label: 'Four' },
  { value: 5, label: 'Five' },
  { value: 6, label: 'Six' },
  { value: 7, label: 'Seven' },
  { value: 8, label: 'Eight' },
  { value: 9, label: 'Nine' },
  { value: 10, label: 'Ten' },
  { value: 11, label: 'More than Ten' },
]

const CrocsForm = ({ change }) => {
	const [state, setState] = useState(initialValues);

	const handleStarSignChange = starSign => {
	const date = new Date().toLocaleString().split(',')[0];
    setState({ 
    ...state,
    starSign: starSign,
    date
    });
   };

    const handleCurrentCrocsChange = currentCrocs => {
	const date = new Date().toLocaleString().split(',')[0];
    setState({ 
    ...state,
    currentCrocs: currentCrocs,
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
          What's your star sign?
        </label>


      <Select options={options}
      value={state.starSign}
        onChange={handleStarSignChange} />
        </div>

				<div className="col m6 s12">
					
        <label>
          How many crocs do you currently own?
        </label>


      <Select options={optionsCurrentCrocs}
      value={state.currentCrocs}
        onChange={handleCurrentCrocsChange} />
        </div>

			<div className="center">
				<button
					id="crocs-btn"
					className="calculate-btn"
					type="button"
					disabled={state.starSign === '' || state.currentCrocs === ''}
					onClick={handleSubmit}
				>
					Calculate Crocs
				</button>
			</div>
			</div>
		</>
	);
};

CrocsForm.propTypes = {
	change: PropTypes.func.isRequired
};

export default CrocsForm;
