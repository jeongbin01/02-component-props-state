
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Button2 from './components/Button2'
import Button3 from './components/Button3'
import Button4 from './components/Button4'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Main2 from './components/Main2'

function App() {
  // useState 훅 : 리엑트에서 제일 많이 사용하는 훅
  //        상태가 수정되면 JSX의 렌더링이 자동으로 일어난다. 
  //   const [state, setState]  = useState(초기값); 
  //           상태 ,  상태를수정

  // 버튼을 클릭시 자동으로 1씩 증가하는 State(상태)
  const [count, setCount] = useState(0);
  // 버튼 클릭시 ON/OFF를 반복하는 State(상태)
  const [light, setLight] = useState("OFF"); 
  

  return (
    <>
      <Header />
      <b><i>
       초기 셋팅 완료 
       </i>
       </b>
       <h2> Main 컴포넌트 출력 </h2>
       <hr />
      <Main />
       <h2> Main2  컴포넌트 출력 </h2>
       <hr />
       <Main2 />

      <hr /> <br />
      <h2> Button 컴포넌트 : Props를 사용한 컴포넌트에게 데이터 전송 (부모에서 자식으로 전송) </h2>
      <Button text={"쳇GPT"} />
      <Button text={"깃허브"} />
      <Button text={"네이버"} />
      <Button text={"다음"} />
      <Button text={"구글"} />

      <hr /> <br />
      <h2> Button2 컴포넌트 : 구조분해 할당을 사용해서 처리함.  </h2>
      <Button2 text={"2-쳇GPT"} /> 
      <Button2 text={"2-깃허브"} /> 
      <Button2 text={"2-네이버"} /> 
      <Button2 text={"2-다음"} /> 
      <Button2 text={"2-구글"} /> 

      <hr /> <br />
      <h2> Button3 컴포넌트 : 여러 필드의 값 처리  </h2>

      <Button3 text={"3-쳇GPT"} color={"red"} price= {20000}/> 
      <Button3 text={"3-깃허브"} color={"blue"} price= {30000}/> 
      <Button3 text={"3-네이버"} color={"yellow"} price= {40000}/> 
      <Button3 text={"3-다음"} color={"green"} price= {25000}/> 
      <Button3 text={"3-구글"} color={"goldgreen"} price= {22000}/> 

      <hr /> <br />
      <h2> Button4 컴포넌트 : 여러 필드의 값 처리 / 구조분해 할당  </h2>
      <Button4 text={"4-쳇GPT"} color={"red"} price= {20000}/> 
      <Button4 text={"4-깃허브"} color={"blue"} price= {30000}/> 
      <Button4 text={"4-네이버"} color={"yellow"} price= {40000}/> 
      <Button4 text={"4-다음"} color={"green"} price= {25000}/> 
      <Button4 text={"4-구글"} color={"goldgreen"} price= {22000}/> 

      <hr /> <br />
      <h2> useState 훅 사용 :   </h2>

      <h1>{light}</h1>
      <button 
        onClick={()=> {
          setLight(light=="ON" ? "OFF" : "ON"); 
        }
        }
      >
        {light==="ON" ? "끄기" : "켜기"}
      </button>
      <hr /> <br /> 
      <h1>{count}</h1>
      <button
        onClick = {()=>{
          setCount (count+1) ; 
        }}
      >
        +1
      </button>

      <Footer />
    </>
  )
}

export default App