import Navbar from "./components/Sidebar";
import "./css/App.css";

import { useAuth } from "./context/AuthContext";
import RoutesPG from "./routes/RoutesPG";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <main>
      <section className="flex">
        {isAuthenticated && <Navbar />}
        <section className="content">
          <RoutesPG/>
        </section>
      </section>
    </main>
  );
}

export default App;
