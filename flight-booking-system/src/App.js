import "./App.css";
import PaymentModes from "./components/payment/PaymentModes";
import FBSRouter from "./routing/FBSRouter";

function App() {
  return (
    <div className="container">
       <FBSRouter />
      {/* <PaymentModes/> */}
    </div>
  );
}

export default App;
