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
import Lilac from './Color/lilac.png';
import Lemon from './Color/lemon.png';
import Cream from './Color/cream.png';
import Coral from './Color/coral.png';
import Olive from './Color/olive.png';
import Black from './Color/black.png';
import BabyPink from './Color/babypink.png';
import Vermilion from './Color/vermilion.png';



function Result(){

    const location = useLocation();
    const mbtiContents = location.state && location.state.mbtiContents;
    console.log(mbtiContents);

    const resultList = [
        {mbti:'ENTP',
        m:['아름답고 매력적인'],
        c:'Lilac',
        t:['다재다능한 팔방미인이지만, 엄청 잘하진 않아요.','자기합리화랑 포기를 잘하고 하고 싶은대로 다 하면서 살아요.',
        '뭐 하나에 꽂히면 계속 그것만 하는데 질리면 아예 안해요.','지나간 일에 후회가 없어서 힘든 일 있어도 빨리 털어내는 편이에요.',
        '사람들과 지내는걸 좋아하고 친화력이 좋지만 혼자만의 시간도 필요해요.'],
        image: Lilac},

        {mbti:'ENTJ',
        m:['우아하고 매혹적인'],
        c:'Violet',
        t:['자기애가 강해요.','누군가에게 의지하지 않고 본인을 믿어요.','팀플을 하면 총대를 잘 매요.','성격이 불도저같은 경향이 있어요.',
        '남이 간섭하는걸 싫어하고 남 일에 관심이 없어요.'],
        image: Violet},

        {mbti:'ENFP',
        m:['화사하고 로맨틱한'],
        c:'Peach',
        t:['어디에 있든 누구와도 잘 어울리는 말랑한 성격의 소유자!','사람을 좋아하는 당신은 정의감도 넘칩니다.','잘 나서진 않지만 아무도 나서지 않으면 나서는 스타일이에요.',
        '감정기복이 심하며, 감정이 얼굴에 다 드러나요.','계획없이 즉흥적인것을 좋아해요.'],
        image: Peach},

        {mbti:'ENFJ',
        m:['열정적이고 긍정적인'],
        c:'Vermilion',
        t:['사람들을 이끄는 것에 타고난 기질이 있어요.','사람을 좋아하는 당신은 정의감도 넘칩니다.','멘탈이 강하며, 센스있고 눈치가 빨라요.',
        '남들에게 신경쓰고 잘해주려 하지만 그만큼 상처도 받아요.','호기롭게 시작해도 금세 싫증을 내는 일이 종종 있으니 주의하세요!'],
        image: Vermilion},

        {mbti:'ESFP',
        m:['강렬하게 빛나는'],
        c:'Red',
        t:['사람들에게 장난치는 것도 좋아하고 자신의 얘기를 솔직하게 잘 꺼내는 편입니다!','사람의 단점보단 장점을 보려하고 싸움보단 평화가 좋아요.',
        '사교성이 좋고 자존감도 높아요.','하고싶다고 생각한건 다 해야하지만 하기 싫은건 끝까지 미루는 편이에요.','고집이 쎄고 자신의 위주로 돌아가길 원해요.'],
        image: Red},

        {mbti:'ESFJ',
        m:['귀엽고 사랑스러운'],
        c:'BabyPink',
        t:['주변 인물들을 잘 챙기며 사교성이 좋습니다.','멘탈이 약한편이라 상처를 잘 받습니다.',' 남 눈치를 많이 봐요.','배려심이 좋고 상담이나 고민등을 잘 들어줘요.',
        '어색한걸 참지 못해 먼저 말을 시작해요. '],
        image: BabyPink},

        {mbti:'ESTP',
        m:['활기차고 밝은'],
        c:'Coral',
        t:['밖에서 사람 만나는거 좋아하지만 나가는게 귀찮아요.','리더쉽이 있어 모임에서 어느새 분위기를 주도하고 있어요.','표현을 잘하고 어른들이 좋아해요.',
        '공감능력이 조금 부족해요.','흘러가는대로 살아요.'],
        image: Coral},

        {mbti:'ESTJ',
        m:['에너지 넘치고 청량한'],
        c:'Orange',
        t:['리더 맡는게 싫지만 막상 맡으면 잘해요.','싸우는게 싫지만 지는게 더 싫어요.','목표를 설정해놓으면 달성할 때까지 한 우물만 파요.','뭐든 확실한게 좋고 호불호가 확실해요.',
        '사람들이 아는 내 성격이랑 혼자 있을 때가 조금 달라요.'],
        image: Orange},

        {mbti:'INTP',
        m:['신비롭고 매력적인'],
        c:'Silver',
        t:['조용히 혼자 있는것을 즐겨요.','자신의 선 안에 있는 사람과 밖의 있는 사람을 확실히 구분합니다.','자기주관이 뚜렷하며 호불호가 강합니다.',
        '논리력이 부족한 사람들을 보면 화가나요.','시작하면 끝을 봐야하는 성격!'],
        image: Silver},

        {mbti:'INTJ',
        m:['고요하고 분위기있는'],
        c:'Black',
        t:['조용히 혼자 있는것을 즐겨요.','사람이 많고 시끄러운 장소를 싫어해요.','사실과 원리원칙이 중요한 완벽주의자!','자기주관이 뚜렷하며 호불호가 강합니다.',
         '친해지기까지 오래 걸려요.'],
        image: Black},

        {mbti:'INFP',
        m:['차분하고 따스한'],
        c:'Olive',
        t:['진입장벽이 높지만 장벽을 넘는 사람에겐 한없이 퍼주는 당신!','배려심이 많은 당신은 그 배려심으로 인해 본인이 피해본적도 많습니다.',
        '여러명이서 노는것보다 한두명이서 노는걸 좋아해요.','싸우는게 싫어서 본인이 희생해요.','남한테 폐끼치는 걸 싫어해요.'],
        image: Olive},

        {mbti:'INFJ',
        m:['포근하고 청량한'],
        c:'SkyBlue',
        t:['친해지고 싶은 사람이 있어도 그 사람이 먼저 다가와주길 바래요.','닟가림이 심해서 새로운 사람을 만나는걸 좋아하지 않아요.','눈치가 빠르고 계획적인걸 좋아해요',
        '혼자만의 시간이 꼭 필요해요.','집순이지만 여행가는게 좋아요.'],
        image: SkyBlue},

        {mbti:'ISTP',
        m:['활발하고 진취적인'],
        c:'Yellow',
        t:['귀찮음의 끝판왕!','티를 안내려 하지만 전부 다 드러나요.','효율이 매우 좋습니다.','친하면 활발하지만 내 사람이 아니면 말을 잘 안해요.',
        '이것저것 공부하고 싶은게 많지만 끝을 잘 보지 못해요.'],
        image: Yellow},

        {mbti:'ISTJ',
        m:['톡톡튀며 개성있는'],
        c:'Lemon',
        t:['자기 주장이 강해서 하고싶은것만 하는 스타일','협동하는 것 보다 혼자서 하는것을 좋아해요.','남에게 간섭받는 것을 싫어해요.',
        '효율이 좋아 벼락치기를 잘해요!','책임감이 높아 무언가를 시작하면 끝까지 완수해요.'],
        image: Lemon},

        {mbti:'ISFP',
        m:['은은하고 산뜻한'],
        c:'Lime',
        t:['약속이 취소되면 행복해요.','조용하지만 친해지면 활발해요.','결정을 잘 못하고 거절도 잘 못해요.','혼자가 좋지만 막상 사람들과 만나도 잘 놀아요. 다만 금방 지칠 뿐..',
        '고집이 쎄고 하기 싫은건 하지 않아요.'],
        image: Lime},

        {mbti:'ISFJ',
        m:['부드럽고 섬세한'],
        c:'Cream',
        t:['내향적이지만 경우에 따라 외향적인 척도 가능해요.','단체활동보다 혼자서 할 수 있는 일을 좋아해요.','배려심이 많고 공감을 잘해줍니다.',
        '자신의 얘기를 잘 하지 않고 들어주는 것을 잘합니다.','인간관계에 스트레스를 잘 받습니다.'],
        image: Cream},

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
                <div className="TestBy">울산대학교 IT융합학부 학술 동아리 가온누리에서 제작하였습니다.</div>
                <div className="ByName">김현지, hyean03@naver.com</div>
                <div className="ByDiv"></div>
            </div>
        </div>
    );
}

export default Result;