import Main from "./components/main/Main";
import Navigation from "./components/navigation/Navigation";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Navigation />
        <Main />
      </div>
    </div>
  );
}

export default App;
