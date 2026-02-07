import React from "react";

function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Tech Solutions",
      duration: "2023 – Present",
      description:
        "Working on responsive web applications using React and Tailwind CSS. Implemented reusable components and optimized UI performance.",
    },
    {
      role: "MERN Stack Intern",
      company: "Digital Agency",
      duration: "2022 – 2023",
      description:
        "Built REST APIs using Node.js and Express. Integrated MongoDB and worked on authentication and CRUD operations.",
    },
    {
      role: "Web Developer",
      company: "Freelance",
      duration: "2021 – 2022",
      description:
        "Developed static and dynamic websites using HTML, CSS, JavaScript and React for small businesses.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600">Experience</h1>
        <p className="mt-3 text-gray-600">
          My professional journey and work experience
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="max-w-4xl mx-auto mt-12 space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-600"
          >
            <h2 className="text-xl font-semibold">{exp.role}</h2>
            <p className="text-gray-500">{exp.company}</p>
            <p className="text-sm text-gray-400 mb-3">{exp.duration}</p>
            <p className="text-gray-600">{exp.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Experience;
