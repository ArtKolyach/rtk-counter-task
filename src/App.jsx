import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCounterValue } from "./redux/counterSlice";

// Каунтер на RTK
// 1. Заставь каунтер работать без помощи RTK
// 2. Заставь каунтер работать С помощью RTK
// 3. Добавь возможность изменить шаг инкрементации и декрементации каунтера

export default function App() {
  return <Counter />;
}

function Counter() {
  return (
    <div className="counter">
      <button>-</button>
      <div>0</div>
      <button>+</button>
    </div>
  );
}
