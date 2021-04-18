export default function validateInfo(values) {
  let errors = {};

  if (!values.voorletters) {
    errors.voorletters = 'Voorletters zijn verplicht';
  }

  if (!values.achternaam) {
    errors.achternaam = 'Achternaam is verplicht';
  }

  if (!values.postcode) {
    errors.postcode = 'Postcode is verplicht';
  }

  if (!values.huisnummer) {
    errors.huisnummer = 'Huisnummer is verplicht';
  }

  // Email
  if (!values.email) {
    errors.email = 'Email is verplicht';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email adres is niet correct';
  }

  return errors;
}
