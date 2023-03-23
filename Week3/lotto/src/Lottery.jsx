import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

import {
  recoilEntRState,
  recoilEntRSelector,
  recoilEntState,
  recoilEntSelector,
  recoilLottoState,
  recoilLottoSelector,
  recoilInputState,
  recoilInputSelector,
} from "./atoms";

// 어떤 함수들이 존재할지 고민
// 1. 로또 응모 번호 7개 생성
// 2. 로또 당첨 번호 생성 (hard coding 가능)
// => 1, 2 합쳐서 그냥 radomNum(int) 형식의 함수로 만들어도 될 듯
// 3. 사용자가 입력하는 숫자 2개 필요 (입력 함수)
// 4. 사용자 입력 번호, 응모 번호 합치기 (변수로 전달 가능)
// 5. 정렬 함수 (응모 번호, 당첨 번호 전부 사용)
// 6. 번호 일치 여부 확인하고 맞힌 개수에 따라 안내 메시지 출력하는 함수

function RandNum(num) {
  let randomIndexArray = [];
  for (i = 0; i < num; i++) {
    const randomNum = Math.floor(Math.random() * 45);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum);
    }
  }

  return randomIndexArray.join(" ");
}

function DrawEntNum() {
  // random number 7개 생성
  // value가 entNum일 때
  // recoilEntRState / Selector
  // string 형식으로 저장
  const entRNum = RandNum(7);
  const [entNum, setEntRNum] = useRecoilState(recoilEntRState);
  const onClick = setEntRNum(RandNum(7));

  return (
    <div>
      <p>{entRNum}</p>
      <button value={entNum} onClick={onClick}>
        Generate Your Luck!
      </button>
      <br />
      Echo: {entNum}
    </div>
  );
}

function DrawLottoNum() {
  // random number 9개 생성
  // string 형식으로 저장
}

function InputNum() {
  // 한 번에 두 개 입력 받기
  // string 형식으로 EntNum 뒤에 붙여서 recoilEntState / Selector에 저장
}

function SortNumbers() {
  //9개 number 정렬
  // string 형식으로 저장
}

function Matching() {
  // EntNum이랑 LotNum이랑 일치하는 숫자의 개수 계산
  // 숫자 개수에 따라 메시지 출력
}

export default function Lottery() {
  const entNum = useRecoilValue(recoilEntState);
  return (
    <RecoilRoot>
      <div className="App">
        <h3>Your Lottery Number is...</h3>
        <p className="LotteryNum">{entNum}</p>
        <br />
        <h4>Enter 2 more numbers and try your Luck!</h4>
        <InputNum />
        <button>
          <p>Try!</p>
        </button>
        <br />
        <button>
          <p>Regenerate Your Luck!</p>
        </button>
      </div>
    </RecoilRoot>
  );
}
