import React from "react";

function Project() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-stack MERN e-commerce application with payment integration.",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React and Tailwind CSS.",
      link: "#"
    },
    {
      title: "Blog Platform",
      description: "A MERN stack blog platform with user authentication and CRUD features.",
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-gray-100" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600">My Projects</h2>
        <p className="mt-4 text-gray-600">Some of my recent works.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-500">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
