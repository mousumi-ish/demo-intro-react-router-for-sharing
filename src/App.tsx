import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./components/router/router";

function App() {
  /*return (
    <>
      <Header />
      <main className="p-6" style={{ flex: "1" }}>
        <Home />
      </main>
      <Footer />
    </>
  );
}*/
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
