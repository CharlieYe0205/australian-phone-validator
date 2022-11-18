import React, { useRef, useState } from 'react';

const PhoneValidator = () => {

  const phoneNumberRef = useRef();
  const [result, setResult] = useState('');

  const validatePhone = () => {
    const phoneNumber = phoneNumberRef.current.value;

    const phoneNumberRaw = phoneNumber.replace(/[() \-_]/g, '');

    const matches = phoneNumberRaw.match(/^(((\+61)|0)[234578])?\d{8}$/);

    setResult(matches ? 'valid' : 'not valid');
  };

  return (
    <>
      <h3>Australian Phone Validator</h3>
      <br/>

      <input type="text" ref={ phoneNumberRef }/>
      <button onClick={ validatePhone }>Check</button>

      <br/>
      <h3>{ result }</h3>
    </>
  );
};

export default PhoneValidator;