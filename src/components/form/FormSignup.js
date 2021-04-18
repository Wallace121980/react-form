import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors, isLoading } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>
          Ga vandaag nog met ons aan de slag! Maak uw account aan door
          onderstaande gegevens in te vullen.
        </h1>
        <div className='form-inputs'>
          <label htmlFor='voorletters' className='form-label'>
            Voorletters
          </label>
          <input
            id='voorletters'
            type='text'
            name='voorletters'
            className='form-input'
            placeholder='Voer uw voorletters in'
            value={values.voorletters}
            onChange={handleChange}
          />
          {errors.voorletters && <p className='error'>{errors.voorletters}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='tussenvoegsel' className='form-label'>
            Tussenvoegsel
          </label>
          <input
            id='tussenvoegsel'
            type='text'
            name='tussenvoegsel'
            className='form-input'
            placeholder='Voer uw tussenvoegsel in'
            value={values.tussenvoegsel}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label htmlFor='achternaam' className='form-label'>
            Achternaam
          </label>
          <input
            id='achternaam'
            type='text'
            name='achternaam'
            className='form-input'
            placeholder='Voer uw achternaam in'
            value={values.achternaam}
            onChange={handleChange}
          />
          {errors.achternaam && <p className='error'>{errors.achternaam}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='postcode' className='form-label'>
            Postcode
          </label>
          <input
            id='postcode'
            type='text'
            name='postcode'
            className='form-input'
            placeholder='Voer uw postcode in'
            value={values.postcode}
            onChange={handleChange}
          />
          {errors.postcode && <p className='error'>{errors.postcode}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='straatnaam' className='form-label'>
            Straatnaam
          </label>

          {values.straatnaam && <p>{values.straatnaam}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='stad' className='form-label'>
            Stad
          </label>

          {values.stad && <p>{values.stad}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='huisnummer' className='form-label'>
            Huisnummer
          </label>
          <input
            id='huisnummer'
            type='text'
            name='huisnummer'
            className='form-input'
            placeholder='Voer uw huisnummer in'
            value={values.huisnummer}
            onChange={handleChange}
          />
          {errors.huisnummer && <p className='error'>{errors.huisnummer}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>
            Email adres
          </label>
          <input
            id='email'
            type='email'
            name='email'
            className='form-input'
            placeholder='Voer uw email-adres in'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className='error'>{errors.email}</p>}
        </div>

        <button className='form-input-btn' type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
