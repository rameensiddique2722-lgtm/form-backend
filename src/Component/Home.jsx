
import About from "./About";
import Skill from "./Skill";
import Experience from "./Experience";
import Contact from "./Contact";
import Project from "./Project";

function Home() {
  
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold text-blue-600">
          Hi, I'm a MERN Stack Developer
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          I build modern, responsive and scalable web applications using
          React, Node.js, Express and MongoDB.
        </p>
      </section>
      {/* Other Sections */}
      <section>
        <About/>
        <Skill/>
        <Experience/>
        <Project/>
        <About/>
        <Contact/>
      </section>
      
  
    </div>
  );
}

export default Home;
