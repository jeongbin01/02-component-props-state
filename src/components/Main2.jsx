const Main2 = () => {
    // 자바스크립트 변수 선언
    const user = {
        name: '홍길동',
        age: 30,
        isLogin: false,
    };

    if (user.isLogin){
        // jsx를 리턴으로 처리함
        return <div>로그인 아웃</div>
    }else{
        // jsx를 리턴으로 처리함
        return <div>로그인</div>

    }
}

export default Main2