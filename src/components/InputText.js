import React, { useState } from 'react';

const InputText = () => {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const handelOnChange = (evt) => {
    console.log(evt.target.value);
    setName(evt.target.value);
  };

  const handleOnBlur = (e) => {
    console.log(e.target.value);
    let regex = new RegExp('[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9-.]{2,3}');
    if (regex.test(e.target.value)) {
      window.alert('이메일 주소가 맞습니다.');
      setEmail(e.target.value);
    } else {
      window.alert('이메일 주소가 아닙니다.');
    }
  };

  const handleOnKeyUp = (e) => {
    console.log(e);
    if (e.keyCode === 13) {
      setAddress(e.target.value);
    }
  };
  return (
    <>
      <div>InputText</div>
      <div>
        이름 :{' '}
        <input
          type="text"
          placeholder="이름을 입력하세요...."
          onChange={handelOnChange}
          value={name}
        />
        <div>입력한 이름을 : {name}</div>
        <div>
          이메일 :{' '}
          <input
            type="text"
            placeholder="이메일을 입력하세요...."
            onBlur={handleOnBlur}
          />
          <div>입력한 이메일은 : {email}</div>
        </div>
        <div>
          주소 :{' '}
          <input
            type="text"
            placeholder="주소를 입력하고 엔터하세요.."
            onKeyUp={handleOnKeyUp}
          />
          <div>주소 : {address}</div>
        </div>
      </div>
    </>
  );
};

export default InputText;
