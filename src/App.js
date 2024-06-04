import "./index.css";
import Main from "./components/Main";
import BoxBill from "./components/BoxBill";
import BoxTotal from "./components/BoxTotal";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [person, setPerson] = useState(0);

  return (
    <div className="app">
      <Main>
        <BoxBill
          setPerson={setPerson}
          setBill={setBill}
          setTip={setTip}
          person={person}
          bill={bill}
        />
        <BoxTotal bill={bill} tip={tip} person={person} />
      </Main>
    </div>
  );
}
