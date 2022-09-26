import { useState } from "react";
import "./styles.css";
import UserProfile from "./components/UserProfile";

export default function App() {
  const [userId, setUserId] = useState(0);

  return (
    <div className="App container-fluid w-50 p-5">
      <div className="row m-1">
        <div className="col-md-12">
          <form>
            <input type="number" className="form-control" placeholder="Enter User Number i.e. 1,2,3" onInput={(e) => setUserId(e.target.value)} />
          </form>
        </div>
      </div>
      {
          userId ? <UserProfile userId={userId} /> : <div className="text-primary">Please search using user number</div>
      }      
    </div>
  );
}
