export default function BoxTotal({ bill, tip, person }) {
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

        <h1>${(checkParam && calculateTip) || "0.00"}</h1>
      </div>

      <div className="box-amount">
        <p>
          <span>Total</span>
          <span>/ person</span>
        </p>
        <h1>${(checkParam && calculateTotal) || "0.00"}</h1>
      </div>

      <button disabled>reset</button>
    </div>
  );
}
