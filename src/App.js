import "./index.css";
import Main from "./components/Main";
import BoxBill from "./components/BoxBill";
import BoxTotal from "./components/BoxTotal";
import { useState } from "react";
import TipButton, { Button } from "./components/TipButton";
import Bill from "./components/Bill";
import People from "./components/People";

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [person, setPerson] = useState(0);

  return (
    <div className="app">
      <Main>
        <BoxBill>
          <Bill bill={bill} setBill={setBill} />

          <TipButton>
            <Button tip={tip} setTip={setTip} />
          </TipButton>

          <People person={person} setPerson={setPerson} />
        </BoxBill>

        <BoxTotal bill={bill} tip={tip} person={person} />
      </Main>
    </div>
  );
}
