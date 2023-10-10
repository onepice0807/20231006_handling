import React, { useState } from 'react';

const Contents = () => {
  console.log('rendering...');
  const [count, setCount] = useState(0); // state hooks 생성

  const onIncrease = () => {
    // count = count + 1; // count는 const 선언되었기 때문에 값을 재할당 할 수 없다.
    // setCount(++count); // ++count는 count + 1; 같은의미
    setCount(count + 1);
    // setCount((count) => count + 1); // 위 코드와 같은 동작
  };

  const onDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div>Contents</div>
      <div>
        count : {count}
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </>
  );
};

export default Contents;
