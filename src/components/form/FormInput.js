import React from 'react';

const FormInput = ({ name, value, onChange, error, placeholder }) => {
	return (
		<div className='form-inputs'>
			<label htmlFor={name} className='form-label'>
				Voorletters
			</label>
			<input
				id={name}
				type='text'
				name={name}
				className='form-input'
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{error && <p className='error'>{error}</p>}
		</div>
	);
};

export default FormInput;
