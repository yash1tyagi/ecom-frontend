
// import Home from "./Componants/Home";
import Navbar from "./Componants/Navbar";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Rauter from "./Rauter";
import { CustomerState } from "./Context/Customer/CustomerState";
import SellerRoutes from "./Seller(admin)/sellerRoutes";
function App() {

  return (
    <div>
      <Router>
      <CustomerState>
        <div className="sticky top-0"><Navbar/></div>
        <Rauter/>
        <SellerRoutes/>
      </CustomerState>
      </Router>
    </div> 
  );
}

export default App;