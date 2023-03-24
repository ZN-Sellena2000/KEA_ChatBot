import { atom, selector } from "recoil";

// 전역변수로 어떤 것들이 사용 되어야 하는지 고려
// 1. 로또 응모 번호
// 2. 로또 당첨 번호
// 3. 사용자가 입력하는 숫자 2개
// 4. 로또 응모 번호 전체 합친 것

export const recoilEntRState = atom({
  key: "recoilEntRState",
  default: "",
});

export const recoilEntRSelector = selector({
  key: "recoilEntRSelector",
  get: ({ get }) => {
    return get(recoilEntRState);
  },
  set: ({ set }, newValue) => set(recoilEntRState, newValue),
});

export const recoilEntState = atom({
  key: "recoilEntState",
  default: "",
});

export const recoilEntSelector = selector({
  key: "recoilEntSelector",
  get: ({ get }) => {
    return get(recoilEntState);
  },
});

export const recoilLottoState = atom({
  key: "recoilLottoState",
  default: "",
});

export const recoilLottoSelector = selector({
  key: "recoilLottoSelector",
  get: ({ get }) => {
    return get(recoilLottoState);
  },
});

export const recoilInputState = atom({
  key: "recoilInputState",
  default: "",
});

export const recoilInputSelector = selector({
  key: "recoilInputSelector",
  get: ({ get }) => {
    return get(recoilInputState);
  },
});

export const textState1 = atom({
  key: "textState1",
  default: "",
});

export const textState2 = atom({
  key: "textState2",
  default: "",
});

export const textSelector1 = selector({
  key: "textSelector1", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState1);

    return text;
  },
});

export const textSelector2 = selector({
  key: "textSelector2", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState2);

    return text;
  },
});

export const matchingState = atom({
  key: "matchingState",
  default: "",
});

export const matchingCount = selector({
  key: "matchingCount",
  get: ({ get }) => {
    const text = get(matchingState);
    return text;
  },
  set: ({ set }, newValue) => set(matchingState, newValue),
});

const [rNum, setRNum] = useRecoilState(recoilEntRState);

const onClick = (event) => {
  setRNum(randomNum);
};

console.log("randomNum", randomNum);

return (
  <div>
    <button className="buttonText" value={rNum} onClick={onClick}>
      <p>Generate Your Luck!</p>
    </button>
  </div>
);
