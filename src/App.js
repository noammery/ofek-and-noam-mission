import "./App.css";
import Contact from "./components/Contact";
import LoginForm from "./components/LoginForm";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <LoginForm />
      <Register></Register>
      <Contact />
    </div>
  );
}

export default App;
