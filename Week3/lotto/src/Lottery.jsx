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
  textState1,
  textSelector1,
  textState2,
  textSelector2,
} from "./atoms";

// // 어떤 함수들이 존재할지 고민
// // 1. 로또 응모 번호 7개 생성
// // 2. 로또 당첨 번호 생성 (hard coding 가능)
// // => 1, 2 합쳐서 그냥 radomNum(int) 형식의 함수로 만들어도 될 듯
// // 3. 사용자가 입력하는 숫자 2개 필요 (입력 함수)
// // 4. 사용자 입력 번호, 응모 번호 합치기 (변수로 전달 가능)
// // 5. 정렬 함수 (응모 번호, 당첨 번호 전부 사용)
// // 6. 번호 일치 여부 확인하고 맞힌 개수에 따라 안내 메시지 출력하는 함수

function getRandomNumber(max, min = 1) {
  return Math.floor(Math.random() * max) + min;
}

function RandNum(num) {
  let list = new Set();

  while (num > list.size) {
    list.add(getRandomNumber(45, 1));
  }

  console.log("Final list", list);
  const returnVal = [...list].join(", ");
  console.log("list string", returnVal);

  return returnVal;
}

function DrawEntNum() {
  // random number 7개 생성
  // value가 entNum일 때
  // recoilEntRState / Selector
  // string 형식으로 저장
  const randomNum = RandNum(7);
  const [rNum, setRNum] = useRecoilState(recoilEntRState);

  const onClick = (event) => {
    setRNum(RandNum(7));
  };

  console.log("randomNum", randomNum);

  return (
    <div>
      <button className="buttonText" value={rNum} onClick={onClick}>
        <p>Regenerate Your Luck!</p>
      </button>
    </div>
  );
  // 여기서 recoil state에 집어넣기
}

// function DrawLottoNum() {
//   // random number 9개 생성
//   // string 형식으로 저장
// }

function InputNum() {
  // 한 번에 두 개 입력 받기
  // string 형식으로 EntNum 뒤에 붙여서 recoilEntState / Selector에 저장
  const [text1, setText1] = useRecoilState(textState1);

  const onChange1 = (event) => {
    setText1(event.target.value);
  };

  const [text2, setText2] = useRecoilState(textState2);

  const onChange2 = (event) => {
    setText2(event.target.value);
  };

  return (
    <div>
      <p>
        Number1 &nbsp;&nbsp;
        <input type="text" value={text1} onChange={onChange1} />
      </p>
      <p>
        Number2 &nbsp;&nbsp;
        <input type="text" value={text2} onChange={onChange2} />
      </p>
    </div>
  );
}

function SortNumbers(string) {
  //9개 number 정렬
  // string 형식으로 저장

  var originArr = string.split(",").map(function (item) {
    return parseInt(item, 10);
  });

  var sortedArr = originArr.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
  console.log("sortedArr", sortedArr);

  return sortedArr.join(", ");
}

function DisplayEntLotto() {
  var entLotto = "";
  const entRLotto = useRecoilValue(recoilEntRState); // "13, 2, 5, 45, 14, 16, 30";
  const digit1 = useRecoilValue(textSelector1);
  const digit2 = useRecoilValue(textSelector2);

  entLotto = entRLotto + ", " + digit1 + ", " + digit2;

  entLotto = SortNumbers(entLotto);

  return <p>{entLotto}</p>;
}

function Matching() {
  // EntNum이랑 LotNum이랑 일치하는 숫자의 개수 계산
  // 숫자 개수에 따라 메시지 출력

  const lottoNumber = "1, 5, 9, 10, 15, 23, 37, 41, 43";
  // 아래 부분은 recoil 사용해서 다시 정리 필요
  var entLotto = "";
  const entRLotto = useRecoilValue(recoilEntRState); // "13, 2, 5, 45, 14, 16, 30";
  const digit1 = useRecoilValue(textSelector1);
  const digit2 = useRecoilValue(textSelector2);

  entLotto = entRLotto + ", " + digit1 + ", " + digit2;

  entLotto = SortNumbers(entLotto);

  var lottoNum = lottoNumber.split(",").map(function (item) {
    return parseInt(item, 10);
  });

  var drawNum = entLotto.split(",").map(function (item) {
    return parseInt(item, 10);
  });

  var matchingCount = 0;

  const onClick = (event) => {
    const intersection = lottoNum.filter((x) => drawNum.includes(x));
    matchingCount = intersection.length;
  };

  return (
    <div>
      <button>
        <p className="buttonText" onClick={onClick}>
          &nbsp;&nbsp;Try!&nbsp;&nbsp;
        </p>
      </button>
      <p>Matching Count : {matchingCount}</p>
    </div>
  );
}

export default function Lottery() {
  // const entNum = useRecoilValue(recoilEntState);
  // const digit = useRecoilValue(textSelector1);
  // const digit2 = useRecoilValue(textSelector2);
  return (
    <RecoilRoot>
      <div>
        <h1>GCU Lotto</h1>
        <h2>Your Lottery Number is...</h2>
        <DisplayEntLotto />
        {/* <p className="LotteryNum">{entNum}</p> */}
        <h4>Enter 2 more numbers and try your Luck!</h4>
        <InputNum />
        <DrawEntNum />
        <Matching />
      </div>
    </RecoilRoot>
  );
}
