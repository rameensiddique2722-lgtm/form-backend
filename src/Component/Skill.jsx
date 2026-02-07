import React from "react";

function Skill() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Node.js", level: "70%" },
    { name: "MongoDB", level: "65%" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600">My Skills</h1>
        <p className="mt-3 text-gray-600">
          Technologies I use to build modern web applications
        </p>
      </div>

      {/* Skills Section */}
      <div className="max-w-4xl mx-auto mt-12 space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{skill.name}</span>
              <span className="text-gray-500">{skill.level}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Skill;
