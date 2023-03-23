import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const textState1 = atom({
  key: "textState1",
  default: "",
});

const matchingState1 = selector({
  key: "matchingState1", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState1);

    return text;
  },
});

const textState2 = atom({
  key: "textState2",
  default: "",
});

const matchingState2 = selector({
  key: "matchingState2", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState2);

    return text;
  },
});

const lottoState = atom({
  key: "lottoState",
  default: "",
});

const userLotto = selector({
  key: "userLotto", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(lottoState);

    // parsing 해서 숫자 배열로 전달
    return text;
  },
});

function RandomNumber() {
  // 1~45사이의 7개의 random number 생성 및 출력
  let randomIndexArray = [];
  for (i = 0; i < 7; i++) {
    const randomNum = Math.floor(Math.random() * 45);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum);
    }
  }
  console.log(randomIndexArray);

  const lottoString = randomIndexArray.join(" ");

  const setLotto = useSetRecoilState(lottoString);
}

function InputNumber() {
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
      <h3>Enter 2 numbers that is not in the random number.</h3>
      <h4>
        Number1 &nbsp;&nbsp;
        <input type="text" value={text1} onChange={onChange1} />
      </h4>
      <h4>
        Number2 &nbsp;&nbsp;
        <input type="text" value={text2} onChange={onChange2} />
      </h4>
    </div>
  );
}

function PrintResult() {
  // 9개의 로또 번호 생성 및 출력
  const digit1 = Number.parseInt(useRecoilValue(matchingState1));
  const digit2 = Number.parseInt(useRecoilValue(matchingState2));
  const lotto = useRecoilValue(lottoState);

  // 일치 결과 제공
  // sorting 사용해서 일치 여부 쉽게 검색할 수 있도록
}

export default function Lottery() {
  return (
    <RecoilRoot>
      <div className="App">
        <RandomNumber />
        <InputNumber />
        <PrintResult />
      </div>
    </RecoilRoot>
  );
}
