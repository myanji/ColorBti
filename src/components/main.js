import React from "react";
import './main.css';
import Mainillu from './mainillu.png';
import { useNavigate } from "react-router-dom";

function Main(){
    const Navigate = useNavigate();

    const goToTest = () => {
        Navigate("/test")
    }

    return(
        <div className="mainDiv">
            <p className="mainTitle">내가 가진 <span style={{ color: "#E78D8D" }}>색</span>은 무엇일까?</p>
            <div className="mainColor">Color</div>
            <div className="mainTest">찾기 테스트</div>
            <div className="mainStart" onClick={goToTest}>시작하기</div>
            <img className="mainImage" src={Mainillu} alt="mainimage"/>
        </div>
    );
}

export default Main;