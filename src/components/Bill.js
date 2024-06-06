export default function Bill({ bill, setBill }) {
  return (
    <div className="box-bill">
      <label htmlFor="bill">Bill</label>
      <input
        type="number"
        id="bill"
        value={bill}
        onChange={(e) => {
          setBill(e.target.value ? Number(e.target.value) : 0);
        }}
      />
      <img src="/images/icon-dollar.svg" alt="dollar icon" />
    </div>
  );
}
