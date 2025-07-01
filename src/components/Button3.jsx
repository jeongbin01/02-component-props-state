export const Button3 = (props) => {
  console.log(props);
  return (
    <div>
      <button style={{ backgroundColor: props.color }}>{props.text} 버튼, 가격 : {props.price}</button>
    </div>
  );
};
export default Button3;
