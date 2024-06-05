export default function BoxTotal({ bill, tip, person, onReset }) {
  const checkParam = bill && tip && person;
  const calculateTip = (bill / person) * (tip / 100);
  const calculateTotal = bill / person + calculateTip;

  return (
    <div className="box">
      <div className="box-amount">
        <p>
          <span>Tip Amount</span>
          <span>/ person</span>
        </p>

        <h1>${(checkParam && calculateTip.toFixed(2)) || "0.00"}</h1>
      </div>

      <div className="box-amount">
        <p>
          <span>Total</span>
          <span>/ person</span>
        </p>
        <h1>${(checkParam && calculateTotal.toFixed(2)) || "0.00"}</h1>
      </div>

      {checkParam ? (
        <button onClick={onReset}>reset</button>
      ) : (
        <button disabled>reset</button>
      )}
    </div>
  );
}
