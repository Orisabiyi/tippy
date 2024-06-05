import "./index.css";
import { useState } from "react";

import Main from "./components/Main";
import BoxBill from "./components/BoxBill";
import BoxTotal from "./components/BoxTotal";
import TipButton from "./components/TipButton";
import Bill from "./components/Bill";
import People from "./components/People";

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [person, setPerson] = useState(0);

  function handleReset() {
    setBill(0);
    setTip(0);
    setPerson(0);
  }

  return (
    <div className="app">
      <Main>
        <BoxBill>
          <Bill bill={bill} setBill={setBill} />

          <TipButton tip={tip} setTip={setTip} />

          <People person={person} setPerson={setPerson} />
        </BoxBill>

        <BoxTotal bill={bill} tip={tip} person={person} onReset={handleReset} />
      </Main>
    </div>
  );
}
