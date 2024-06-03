export default function Box() {
  return (
    <div className="box">
      <div className="box-bill">
        <label for="bill">Bill</label>
        <input type="number" id="bill" />
      </div>

      <div className="box-tip">
        <label>Select tip %</label>
        <button>5%</button>
        <button>10%</button>
        <button>15%</button>
        <button>25%</button>
        <button>50%</button>
      </div>

      <div className="box-people">
        <label for="people">Number of People</label>
        <input type="number" id="people" />
      </div>
    </div>
  );
}
