import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import RouterList from "./routes/RouterList";
import { routes } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Header />
      <RouterList routes={routes} />
      <Footer />
    </div>
  );
}

export default App;
