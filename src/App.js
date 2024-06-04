import "./index.css";
import Main from "./components/Main";
import BoxBill from "./components/BoxBill";
import BoxTotal from "./components/BoxTotal";

export default function App() {
  return (
    <div className="app">
      <Main>
        <BoxBill />
        <BoxTotal />
      </Main>
    </div>
  );
}
