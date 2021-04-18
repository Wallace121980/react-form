import { useState, useEffect } from 'react';
import axios from 'axios';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    voorletters: '',
    tussenvoegsel: '',
    achternaam: '',
    postcode: '',
    straatnaam: '',
    stad: '',
    huisnummer: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(async () => {
    const fetchStreetAndCity = async () => {
      const result = await axios.get(
        `https://photon.komoot.io/api/?q=${values.postcode}`
      );
      if (values.postcode !== '') {
        setValues({
          ...values,
          straatnaam: result.data.features[0].properties.name,
          stad: result.data.features[0].properties.city,
        });
      }
    };
    fetchStreetAndCity();
  }, [values.postcode]);

  useEffect(() => {
    const submit = async () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        setIsLoading(true);
        await axios.post('/requests', values);
        setIsLoading(false);
        callback();
      }
    };
    submit();
  }, [errors]);

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
    isLoading,
  };
};

export default useForm;
