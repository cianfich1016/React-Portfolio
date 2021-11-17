import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import "./components/style.css"
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
} from "react-router-dom";

function App() {


  return (
    <HashRouter>
    <div className="App">
      <Header />
          
              <Route path="/about">
                <About />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route exact path="/">
                <About />
              </Route>
            
      <Footer />
    </div>
    </HashRouter>
  );
}

export default App;
