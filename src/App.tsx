import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";

const App = () => {
  return (
    <BrowserRouter>
    <div className="bg-slate-950 min-h-screen">
      <Nav />
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
};

export default App;
