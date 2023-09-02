import React, { useState } from "react";
import './test.css';
import { useNavigate } from "react-router-dom";

function Test(){
    const Navigate = useNavigate();

    const [page, setPage] = useState(1)

    const questionList = [
        {q:['친구와 카페를 가기로 했는데','갑자기 사정이 생겨서 다음에 만나자는 연락이 왔어!'],
        a:[{type:'I', text:'그럼 오늘은 보고싶었던 영화나 볼까~~'},
           {type:'E', text:'아쉽네… 다른 친구한테 연락이나 해볼까?'}]},

        {q:['오랜만에 친구를 만난 당신!','친구가 어제 회사에서 화났던 일을 말해주는데..','들어보니 친구의 잘못인 것 같다.'],
        a:[{type:'F', text:'헉.. 그 팀장 말 너무 심하게 하는거 아니야??'},
            {type:'T', text:'팀장도 별로긴 한데 다음엔 다르게 해봐'}]},

        {q:['영화가 끝난 뒤 저녁을 먹으러 가던 중','친구가 자신의 애인과 같이 밥을 먹는건 어떠냐는데..'],
        a:[{type:'I', text:'음….. 나 먹다가 체할수도…'},
            {type:'E', text:'오 좋다좋다!! 셋이서 밥먹자!'}]},

        {q:['친구가 즐거웠다며','다음주에 미술관에 같이 가자고 제안한다!'],
        a:[{type:'N', text:'좋아! 나 미술관 가는거 좋아해'},
            {type:'S', text:'미술관도 좋긴 한데.. 카페는 어때?'}]},
        
        {q:['열심히 준비했던 전공과목 시험이','2시간 뒤에 시작하는 당신'],
        a:[{type:'F', text:'망하면 어떡하지… 나… 잘 할수 있겠지?……'},
            {type:'T', text:'흠… 열심히 준비했으니까 어떻게든 되겠지'}]},

        {q:['시험이 끝나고 오늘은 드디어 기다리던 해외여행!!','신나는 발걸음으로 비행기에 탑승했다.'],
        a:[{type:'N', text:'난기류로 비행기가 추락하면 어떡하지… '},
            {type:'S', text:'5시간이나 걸리니까 잠이나 자둬야겠다.'}]},

        {q:['패키지 여행을 신청한 당신에게','같은 패키지를 신청한 사람이 같이 다니자고','말을 건네는데..!'],
        a:[{type:'I', text:'앗.. 이번에 혼자 즐기고 싶어서.. 죄송해요'},
            {type:'E', text:'헉 너무 좋아요! 앞으로 잘 부탁해요'}]},

        {q:['팀원들과 역할을 분배하여 맡은 역할을 수행하는데,','자신과 같은 역할의 팀원이','비효율적으로 일을 처리하고 있다..'],
        a:[{type:'N', text:'( 열심히 하고 계시네 )'},
            {type:'S', text:'( 저 사람은 왜 일을 저렇게 하지.. 답답하다)'}]},

        {q:['팀플중에 점점 말이 격해지더니','결국 의견이 충돌한 두 팀원을 지켜보는 당신..!'],
        a:[{type:'F', text:'아… 왜 싸우는거야… 누가 좀 말렸으면 좋겠다.'},
            {type:'T', text:'A 말이 맞는데 B는 어떻게 반응하려나? (흥미)'}]},
        
        {q:['당신의 색깔을 찾았습니다..!!'],
        a:[{type:'', text: '결과 보러 가기'}]}
    ]

    const [mbtiList, setMbtiList] = useState([
        {name:'I', count:0},{name:'N', count:0},{name:'F', count:0},
        {name:'E', count:0},{name:'S', count:0},{name:'T', count:0},
    ])

    const handleCkAnswer = (type, idx) => {
        let ls = mbtiList
        for (let i = 0; i <ls.length; i++){
            if(ls[i].name === type){
                ls[i].count = ls[i].count + 1
            }
        }
        setMbtiList(ls)
        setPage(page+1)
        setMbti()

        if(idx+1 === questionList.length){
            Navigate('/result', { state: { mbtiContents } });
        }
    }

    const [mbtiContents, setMbtiContents] = useState('')

    function setMbti(){
        let ls = mbtiList

        let IorE = 
            mbtiList.find(function(data){return data.name === 'I'}).count >
            mbtiList.find(function(data){return data.name === 'E'}).count ?'I':'E'

        let NorS = 
            mbtiList.find(function(data){return data.name === 'N'}).count >
            mbtiList.find(function(data){return data.name === 'S'}).count ?'N':'S'
        
        let TorF = 
            mbtiList.find(function(data){return data.name === 'T'}).count >
            mbtiList.find(function(data){return data.name === 'F'}).count ?'T':'F'

        setMbtiContents(IorE + NorS + TorF)
    }

    return(
        <div className="testDiv">
            {page !== questionList.length ? (
                <div className="textIdx">{`${page}/${questionList.length - 1}`}</div>
            ) : null}

            {questionList.map((val,idx)=>
                <div style={{display:page===idx+1?'flex':'none'}} key={idx}>
                    <div className="testQuestion">
                        {val.q.map((qval,qidx) =>
                            <div key={qidx}>
                                <div>{qval}</div>
                            </div>
                        )}
                    </div>
                    <div className="testSelectBox">
                        {val.a.map((aval,aidx)=>
                        <div key={aidx} className="testSelect" onClick={()=>handleCkAnswer(aval.type,idx)}>
                            {aval.text}
                            </div>
                            )}
                        <div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Test;