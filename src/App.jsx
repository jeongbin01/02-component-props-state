// src/App.jsx
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
import ProductCard from './components/ProductCard'

// 1) 이미지 파일을 import 로 불러옵니다.
import roseImg from './components/img/new_01.jpg'

function App() {
  const [count, setCount] = useState(0)
  const [light, setLight] = useState("OFF")

  return (
    <>
      <Header />
      <b><i>초기 셋팅 완료</i></b>

      <h2>Main 컴포넌트 출력</h2>
      <hr />
      <Main />

      <h2>Main2 컴포넌트 출력</h2>
      <hr />
      <Main2 />

      <hr /><br />
      <h2>Button 컴포넌트 : Props 전송</h2>
      <Button text="챗GPT" />
      <Button text="깃허브" />
      <Button text="네이버" />
      <Button text="다음" />
      <Button text="구글" />

      <hr /><br />
      <h2>Button2 컴포넌트 : 구조분해 할당</h2>
      <Button2 text="2-챗GPT" />
      <Button2 text="2-깃허브" />
      <Button2 text="2-네이버" />
      <Button2 text="2-다음" />
      <Button2 text="2-구글" />

      <hr /><br />
      <h2>Button3 컴포넌트 : 여러 필드 처리</h2>
      <Button3 text="3-챗GPT" color="red"    price={20000} />
      <Button3 text="3-깃허브" color="blue"   price={30000} />
      <Button3 text="3-네이버" color="yellow"price={40000} />
      <Button3 text="3-다음" color="green"  price={25000} />
      <Button3 text="3-구글" color="gold"   price={22000} />

      <hr /><br />
      <h2>Button4 컴포넌트 : 구조분해 + 여러 필드</h2>
      <Button4 text="4-챗GPT" color="red"    price={20000} />
      <Button4 text="4-깃허브" color="blue"   price={30000} />
      <Button4 text="4-네이버" color="yellow"price={40000} />
      <Button4 text="4-다음" color="green"  price={25000} />
      <Button4 text="4-구글" color="gold"   price={22000} />

      <hr /><br />
      <h2>useState 훅 사용</h2>
      <h1>{light}</h1>
      <button onClick={() => setLight(light === "ON" ? "OFF" : "ON")}>
        {light === "ON" ? "끄기" : "켜기"}
      </button>

      <hr /><br />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>

      <hr /><br />
      <h2>신규상품</h2>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <ProductCard
          image={roseImg}
          title="맞춤제작(풍경)"
          subtitle="원하는 사이즈로 제작 가능"
          price={20000}
        />
      </div>

      <Footer />
    </>
  )
}

export default App
