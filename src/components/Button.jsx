// rafce : 화살표 함수형 컴포넌트 자동 코드 생성

/*

    Props : 컴포넌트 사이로 데이터를 전송
        1. 단방향이다 . 부모 컴포터트에서 자식 컴포넌트로 전송 (지식 => 부모 (x))

*/

// 부모에서 내려주는 값 (필드: 값)을 props가 받는다.
const Button = (props) => {
    console.log(props)
  return (
    <div>
        <button>{props.text}버튼</button>
    </div>
  )
}

export default Button