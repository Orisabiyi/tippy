export default function People({ person, setPerson }) {
  return (
    <div className="box-people">
      <label htmlFor="people">Number of People</label>
      <input
        type="number"
        id="people"
        value={person}
        onChange={(e) => setPerson(e.target.value ? Number(e.target.value) : 0)}
      />
      <img src="/images/icon-person.svg" alt="person icon" />
    </div>
  );
}
