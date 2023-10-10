import React, { useState } from 'react';

const DateInput = () => {
  const [date, setDate] = useState('');
  const handleChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <>
      <div>DateInput</div>
      <div>
        <input type="date" onChange={handleChange} />
      </div>
      <div>선택한 날짜 : {date}</div>
    </>
  );
};

export default DateInput;
