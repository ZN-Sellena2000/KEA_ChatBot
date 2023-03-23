import "./App.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const textState1 = atom({
  key: "textState1",
  default: "",
});

const textState2 = atom({
  key: "textState2",
  default: "",
});

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState1);

    return text;
  },
});

const charCountState2 = selector({
  key: "charCountState2", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState2);

    return text;
  },
});

function TextInput() {
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
      <h2>
        Number1 &nbsp;&nbsp;
        <input type="text" value={text1} onChange={onChange1} />
      </h2>
      <h2>
        Number2 &nbsp;&nbsp;
        <input type="text" value={text2} onChange={onChange2} />
      </h2>
    </div>
  );
}

function AddCal() {
  const digit = useRecoilValue(charCountState);
  const digit2 = useRecoilValue(charCountState2);

  return (
    <div className="calculator">
      <button>
        <p>+</p>
      </button>
      <p>{Number.parseInt(digit) + Number.parseInt(digit2)}</p>
    </div>
  );
}

function MinCal() {
  const digit = useRecoilValue(charCountState);
  const digit2 = useRecoilValue(charCountState2);

  return (
    <div className="calculator">
      <button>
        <p>-</p>
      </button>
      <p>{Number.parseInt(digit) - Number.parseInt(digit2)}</p>
    </div>
  );
}

function MulCal() {
  const digit = useRecoilValue(charCountState);
  const digit2 = useRecoilValue(charCountState2);

  return (
    <div className="calculator">
      <button>
        <p>*</p>
      </button>
      <p>{Number.parseInt(digit) * Number.parseInt(digit2)}</p>
    </div>
  );
}

function DivCal() {
  const digit = useRecoilValue(charCountState);
  const digit2 = useRecoilValue(charCountState2);

  return (
    <div className="calculator">
      <button>
        <p>/</p>
      </button>
      <p>{Number.parseInt(digit) / Number.parseInt(digit2)}</p>
    </div>
  );
}

function Calculator() {
  return (
    <div>
      <TextInput />
      <br />
      <div className="calculator">
        <h3>Operator&nbsp;&nbsp;&nbsp; Result&nbsp;&nbsp;</h3>
      </div>
      <br />
      <AddCal />
      <br />
      <MinCal />
      <br />
      <MulCal />
      <br />
      <DivCal />
    </div>
  );
}

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>GCU Calculator</h1>
        <Calculator />
      </div>
    </RecoilRoot>
  );
}

export default App;
