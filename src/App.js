import "./App.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Contact />
      </main>
    </>
  );
}

export default App;
