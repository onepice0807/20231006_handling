import React, { useRef, useState } from 'react';

const RefInput = () => {
  const [text, setText] = useState('');
  const textRef = useRef(); // useRef 훅 생성

  const textChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    // 5자 이하의 값이 들어왔을 경우 input 태그에 포커스 시키고 값 비우기
    console.log(textRef);

    if (text.length < 5) {
      textRef.current.value = ''; // 초기화
      textRef.current.focus();
    }
  };
  return (
    <div>
      {/* ref 속성으로 useRef 객체 할당 */}
      <input ref={textRef} type="text" value={text} onChange={textChange} />
      <button onClick={handleSave}>저장</button>
    </div>
  );
};

export default RefInput;
