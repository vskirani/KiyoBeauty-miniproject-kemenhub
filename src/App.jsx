import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
