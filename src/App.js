import "./App.css";
import Footer from "./Layouts/Footer/Footer";
import Header from "./Layouts/Header/Header";
import Router from "./Router/Router";

function App() {
 

 
  

  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Header end */}

      {/* Router */}
      <Router />
      {/* Router end */}

      {/* Footer */}
      <Footer />
      {/* Footer end */}
    </div>
  );
}

export default App;
