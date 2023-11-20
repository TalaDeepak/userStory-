import "./App.css";

import BedCategories from "./Features/Admin/BedCategories";
import { FireBaseProvider } from "./services/firestore";

function App() {
  return (
    <FireBaseProvider>
      <div className="App">
        <BedCategories />
      </div>
    </FireBaseProvider>
  );
}

export default App;
