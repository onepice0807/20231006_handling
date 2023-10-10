import React, { useState } from 'react';

const Radio = ({ label, id, name, value }) => {
  const [contact, setContact] = useState('');
  const handelOnChange = (selectRadioButton) => {
    console.log(selectRadioButton);
    const radios = document.getElementsByName(name);
    console.log(radios);
    for (let i = 0; i < radios.length; i++) {
      if (radios[i] !== selectRadioButton) {
        radios[i].checked = false;
      } else if (radios[i] === selectRadioButton) {
        selectRadioButton.checked = true;
        setContact(selectRadioButton.value);
      }
    }
  };

  console.log(contact);
  return (
    <div>
      <label>
        {label}
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          onChange={(evt) => handelOnChange(evt.target)}
        />
      </label>
    </div>
  );
};

export default Radio;
