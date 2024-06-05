export default function TipButton({ tip, setTip, children }) {
  return (
    <div className="box-tip">
      <label>Select Tip %</label>
      {children}
    </div>
  );
}

export function Button({ tip, setTip }) {
  return (
    <>
      {Array.from({ length: 30 }).map((_, pct) => {
        if (!(pct / 10 >= 3) && pct / 10 <= 5 && pct % 5 === 0 && pct !== 0) {
          const check = pct === 20 ? pct + 5 : pct === 25 ? pct * 2 : pct;
          return (
            <button
              value={check}
              onClick={(e) => setTip(Number(e.target.value))}
              key={check}
              style={tip === check ? { background: "var(--strong-cyan)" } : {}}
            >
              {check}%
            </button>
          );
        }
      })}
    </>
  );
}
