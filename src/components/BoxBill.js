export default function BoxBill({
  setBill,
  setPerson,
  bill,
  person,
  children,
}) {
  return (
    <div className="box">
      <div className="box-bill">
        <label htmlFor="bill">Bill</label>
        <input
          type="number"
          id="bill"
          value={bill}
          onChange={(e) => setBill(e.target.value && Number(e.target.value))}
        />
        <img src="/images/icon-dollar.svg" alt="dollar icon" />
      </div>

      {children}

      <div className="box-people">
        <label htmlFor="people">Number of People</label>
        <input
          type="number"
          id="people"
          value={person}
          onChange={(e) => setPerson(e.target.value && Number(e.target.value))}
        />
        <img src="/images/icon-person.svg" alt="person icon" />
      </div>
    </div>
  );
}
