import React from 'react'

// 구조 분해 할당을 사용해서 적용 : props 객체의 필드를 분해 해서 적용 
const Button4 = ({color, text, price}) => {
  return (
    <div>
        <button style={{color:color}}> {text} 버튼, 가격 : {price} </button>
    </div>
  )
}

export default Button4