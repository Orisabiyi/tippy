export default function BoxBill({ setPerson, person, children }) {
  return (
    <div className="box">
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
