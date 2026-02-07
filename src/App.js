

import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Header from "./Component/Header";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Skill from "./Component/Skill";
import Experience from "./Component/Experience";
import Home from "./Component/Home";
import Project from "./Component/Project";
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Skill/>
      <Experience/>
      <Project/>
      <Login/>
      <Signup/>
<About/>
<Contact/>
    </div>
  );
}

export default App;
