const Header = () => {
  const handelOnClick = (evt) => {
    console.log('onClick : ', evt.target.name); // 어떤 버튼에서 이벤트가 발생했는지 알수 있다
  };

  const handleDoubleClick = () => {
    console.log('handleDoubleClick 됨');
  };
  return (
    <header>
      <h1>header</h1>
      <div>
        {/* 간단한 이벤트는 아래처럼 기술 할 수 있다. */}
        <button onClick={() => window.alert('클릭됨')}>이벤트 할당</button>
        {/* 복잡한 이벤트 처리를 할 때는 함수명을 기술 할 수 있다. */}
        <button name="2" onClick={handelOnClick}>
          이벤트 할당2
        </button>
        <button
          name="3"
          onClick={handelOnClick}
          onDoubleClick={handleDoubleClick}
        >
          이벤트 할당3
        </button>
      </div>
    </header>
  );
};

export default Header;
