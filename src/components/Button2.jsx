// 구조 분해 할당(객체의 필드를 분해 해서 적용) : props.tsxt
const Button2 = ({ text }) => {
  console.log(text);
  return (
    <div>
      <button>{text} 버튼</button>
    </div>
  );
};

export default Button2;
