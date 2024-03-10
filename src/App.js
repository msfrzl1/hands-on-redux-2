import "./App.css";
import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, reset } from "./features/counter/counterSlice";
import { deposit } from "./features/account/accountSlice";

function App() {
  const account_reducer = useSelector((state) => state.account);
  const counter_reducer = useSelector((state) => state.counter);
  const customer_reducer = useSelector((state) => state.customer);
  const { balance } = account_reducer;
  const { counter } = counter_reducer;
  const { fullname = "Muhammad Saifur Rizal" } = customer_reducer;
  const dispatch = useDispatch();

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <div>
              <p>{balance}</p>
            </div>
            <div>
              <button onClick={() => dispatch(deposit(5000))}>Add 5000</button>
            </div>
          </div>

          <div>
            <div>
              <p>{counter}</p>
            </div>
            <div>
              <div>
                <button onClick={() => dispatch(increase(1))}>+</button>
              </div>
              <div>
                <button onClick={() => dispatch(decrease(1))}>-</button>
              </div>
              <div>
                <button onClick={() => dispatch(reset())}>Reset</button>
              </div>
            </div>
          </div>

          <div>
            <div>
              <p>{fullname}</p>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
