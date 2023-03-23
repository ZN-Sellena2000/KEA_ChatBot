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
