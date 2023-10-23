import LeftMenu from "./components/LeftMenu.jsx";
import "./css/App.css";

import { useAuth } from "./context/AuthContext";
import RoutesPG from "./routes/RoutesPG";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <main>
      <section className="flex">
        {isAuthenticated && <LeftMenu />}
        <section className="content">
          <RoutesPG/>
        </section>
      </section>
    </main>
  );
}

export default App;
