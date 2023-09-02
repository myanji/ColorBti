import React from "react";
import { useLocation } from "react-router-dom";
import './result.css';
import Lime from './Color/lime.png';
import Orange from './Color/orange.png';
import Peach from './Color/peach.png';
import Red from './Color/red.png';
import Silver from './Color/silver.png';
import SkyBlue from './Color/skyblue.png';
import Violet from './Color/violet.png';
import Yellow from './Color/yellow.png';


function Result(){

    const location = useLocation();
    const mbtiContents = location.state && location.state.mbtiContents;

    const resultList = [
        {mbti:'ENT',
        m:['우아하고 매혹적인'],
        c:'Violet',
        t:['자존감이 높고 리더에 잘 어울립니다.','다재다능한 팔방미인','싸움에 절대 지지않고 이겨야하는 성향이 남들과 부딪힐 수 있어요!'],
        image: Violet},

        {mbti:'ENF',
        m:['화사하고 로맨틱한'],
        c:'Peach',
        t:['어디에 있든 누구와도 잘 어울리는 말랑한 성격의 소유자!','사람을 좋아하는 당신은 정의감도 넘칩니다.','호기롭게 시작해도 금세 싫증을 내는 일이 종종 있으니 주의하세요!'],
        image: Peach},

        {mbti:'ESF',
        m:['열정이고 빛나는'],
        c:'Red',
        t:['사람들에게 장난치는 것도 좋아하고 자신의 얘기를 솔직하게 잘 꺼내는 편입니다!','자신의 사람을 잘 챙기며 사교성이 좋습니다.','멘탈이 약한편이라 상처를 잘 받습니다.'],
        image: Red},

        {mbti:'EST',
        m:['에너지 넘치고 청량한'],
        c:'Orange',
        t:['다른 사람에게 인정받는것을 좋아합니다.','다재다능한 팔방미인','싸움에 절대 지지않고 이겨야하는 성향이 남들과 부딪힐 수 있어요!'],
        image: Orange},

        {mbti:'INT',
        m:['차분하고 매력적인'],
        c:'Silver',
        t:['조용히 혼자 있는것을 즐겨요.','자신의 선 안에 있는 사람과 밖의 있는 사람을 확실히 구분합니다.','자기주관이 뚜렷하며 호불호가 강합니다.'],
        image: Silver},

        {mbti:'INF',
        m:['따뜻하고 맑은'],
        c:'SkyBlue',
        t:['주변에 선을 확실하게 그으며 신중하지만 따뜻해요.','진입장벽이 높지만 장벽을 넘는 사람에겐 한없이 퍼주는 당신!','배려심이 많은 당신은 그 배려심으로 인해 본인이 피해본적도 많습니다.'],
        image: SkyBlue},

        {mbti:'IST',
        m:['화려하고 에너지 넘치는'],
        c:'Yellow',
        t:['자기 주장이 강해서 하고싶은 것만 하는 스타일','효율이 좋아 벼락치기를 잘해요!','책임감이 높아 무언가를 시작하면 끝까지 완수해요.'],
        image: Yellow},

        {mbti:'ISF',
        m:['은은하고 산뜻한'],
        c:'Lime',
        t:['내향적이지만 경우에 따라 외향적인 척도 가능해요.','자신의 얘기를 잘 하지 않고 들어주는 것을 잘합니다.','암기력이 뛰어난 당신은 암기과목에 능통합니다!'],
        image: Lime},

    ]

    // mbtiContents와 일치하는 결과를 찾기
    const matchedResult = resultList.find(item => item.mbti === mbtiContents);

    if (!matchedResult) {
        // 일치하는 결과가 없을 경우 처리
        return <div>일치하는 결과를 찾을 수 없습니다.</div>;
    }

    return (
        <div className="resultDiv">
            <div>
                {matchedResult.m.map((mval, midx) =>
                    <div key={midx}>
                        <div className="resultmodifier">{mval}</div>
                    </div>
                )}
            </div>
            <div>
                <div className={`resultColor ${matchedResult.c}`}>{matchedResult.c}</div>
            </div>
            <img className="resultImage" src={matchedResult.image} alt={matchedResult.c}/>
            <div>
            <div className="resultContents-wrapper">                
                {matchedResult.t.map((tval, tidx) =>
                    <div key={tidx}>
                        <div className="resultContents">{tval}</div>
                    </div>
                )}
                </div>
            </div>
        </div>
    );
}

export default Result;