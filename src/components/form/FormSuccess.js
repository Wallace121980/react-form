import React from 'react';
import Loader from '../ui/Loader';

const FormSuccess = (isLoading) => {
  return (
    <div className='form-content-right'>
      {!isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1 className='form-success'>We hebben je aanvraag ontvangen!</h1>
          <img src='img/img-3.svg' alt='success-img' className='form-img-2' />
        </div>
      )}
    </div>
  );
};

export default FormSuccess;
