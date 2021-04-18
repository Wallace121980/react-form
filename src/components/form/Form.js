import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img src='img/img-2.svg' alt='spaceship' className='form-img' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess isSubmitted={isLoading} />
        )}
      </div>
    </>
  );
};

export default Form;
