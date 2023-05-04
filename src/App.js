import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Chatbot from "./Components/Chatbot";

function App() {
  const systemMessage = {
    role: "system",
    content:
      "You are the personalized chatbot for SAP Labs organization.You have to assist the user with any questions or concerns regarding SAP Labs.",
  };
  return (
    <div className="App">
      <Navbar />
      <Chatbot systemMessage={systemMessage} />
    </div>
  );
}

export default App;
