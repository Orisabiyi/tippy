import { useState } from "react";

export default function BoxBill() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [person, setPerson] = useState(0);

  const calculateBill = bill / person;

  if (bill && tip && person) console.log(calculateBill);

  return (
    <div className="box">
      <div className="box-bill">
        <label htmlFor="bill">Bill</label>
        <input
          type="number"
          id="bill"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>

      <div className="box-tip">
        <label>Select Tip %</label>
        {Array.from({ length: 30 }).map((_, pct) => {
          if (!(pct / 10 >= 3) && pct / 10 <= 5 && pct % 5 === 0 && pct !== 0) {
            const check = pct === 20 ? pct + 5 : pct === 25 ? pct * 2 : pct;

            return (
              <button
                value={check}
                onClick={(e) => setTip(Number(e.target.value))}
              >
                {check}%
              </button>
            );
          }
          return "";
        })}
      </div>

      <div className="box-people">
        <label htmlFor="people">Number of People</label>
        <input
          type="number"
          id="people"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        />
      </div>
    </div>
  );
}
