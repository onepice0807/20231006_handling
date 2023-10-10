import React, { useState } from 'react';

const InputSelect = () => {
  const [job, setJob] = useState('');
  const handelOnChange = (e) => {
    console.log(e.target.value);
    setJob(e.target.value);
  };
  return (
    <>
      <div>InputSelect</div>
      <select onChange={handelOnChange}>
        <option value="프로그래머">1</option>
        <option value="공무원">2</option>
        <option value="작가">3</option>
      </select>
      <div>직업 : {job}</div>
    </>
  );
};

export default InputSelect;
