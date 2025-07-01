import React from 'react';

import './Main.css';

// jsx 주의 사항 
/*
    1. 최상위 태그(엘리먼트)는 반드시 하나로 묶여져야 한다.
    2. 중괄호 내부는 자바스크립트 표현식만 가능하다.
    3. 숫자, 문자열, 배열 값만 렌더링됨.
    4. 반드시 모든 태그는 닫혀져야 한다.
    5. return은 소괄호로 처리되어야 되고, 생략도 가능하다.
    6. return에 들어가는 코드가 JSX, 즉 body에 출력되는 블록이다.
    7. jex 블ㄹ락에서는 if , for 구문을 사용할 수 없다. 삼항연산자 && 연산자를 사용 처리
    8. 클래스 이름을 부여할 때 : class = '이름' , className = "이름" (jsx)
    9. 인라인 스타일을 적용시 : style = {{스타일 적용}}

*/

const Main = () => {
  // 자바스크립트 변수 선언
  const user = {
    name: '홍길동',
    age: 30,
    isLogin: false,
  };

  return (
    <>
      <div>Main</div>
      {user.isLogin ? <div className='logout'>로그인 아웃</div> : <div id='login'>로그인</div>}
      <hr />
      <br />
      <div><sapn style={{ backgroundColor: 'red', borderBottom: '5px solid black' }}>이름 :</sapn> {user.name}</div>
      <div><sapn>나이 :</sapn> {user.age}</div>
      <hr />
      <br />
    </>
  );
};

export default Main;
